import {ProgressHandler} from '../progress-handler'

export class FileSplitter {
    /**
     *
     * @param {File} file
     * @param {Number} chunkSize
     */
    constructor(file, chunkSize = 1024 * 1024 * 2) {
        this.file = file
        this.chunks = []
        const numChunks = Math.ceil(file.size / chunkSize)
        for (let i = 0; i < numChunks; ++i) {
            this.chunks.push(file.slice(i * chunkSize, (i + 1) * chunkSize))
        }
        this.at = 0
    }

    next() {
        if (this.at === this.chunks.length) return false
        const index = this.at++
        return {
            data: this.chunks[index],
            index: index,
            total: this.length(),
        }
    }

    every(callback) {
        this.chunks.forEach((chunk, index) => {
            callback(chunk, index, this.length())
        })
    }

    length() {
        return this.chunks.length
    }

    upload(progressHandler, initCallback, chunkCallback) {
        return new Promise((resolve, reject) => {
            let remaining = this.length()
            progressHandler.reset().increaseLimit(remaining)
            this.every((chunkData, chunkIndex, chunkTotal) => {
                progressHandler.run((progressResolve, progressReject) => {
                    chunkCallback(
                        chunkData,
                        chunkIndex,
                        chunkTotal,
                        () => {
                            progressResolve()

                            --remaining
                            if (remaining === 0) {
                                resolve()
                            }
                        },
                        () => {
                            progressReject()
                            reject()
                        },
                    )
                })
            })
        })
    }
}