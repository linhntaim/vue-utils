import {ProgressHandler} from '../progress-handler'
import {FileSplitter} from './file-splitter'

export class FilesUploader {
    constructor(ui, maxUploadFileSize, maximumChunkSize = 1024 * 1024 * 10, percentageTextTemplate = '{percent}%') {
        this.ui = ui
        this.maxUploadFileSize = maxUploadFileSize
        this.maximumChunkSize = maximumChunkSize
        this.percentageTextTemplate = percentageTextTemplate
        this.files = []
        this.progress = new ProgressHandler(this.ui, this.percentageTextTemplate)
    }

    quickProcessFilesWithChunks({files, filteredCallback = null}, {everyChunkCallback, everyDoneCallback = null, everyErrorCallback = null, everyPromisedBeforeCallback = null, continuously = false}, preview = false) {
        this.processFiles(files, filteredCallback).then(() => {
            const processChunks = () => this.processChunks(everyChunkCallback, everyDoneCallback, everyErrorCallback, everyPromisedBeforeCallback, continuously)
            preview ? this.processPreview().then(processChunks) : processChunks()
        })
    }

    /**
     *
     * @param {FileList | array } files
     * @param {function | null} filteredCallback
     * @return {Promise}
     */
    processFiles(files, filteredCallback = null) {
        this.files = []
        return new Promise(resolve => {
            let remaining = files.length
            const left = () => {
                --remaining
                if (remaining === 0) {
                    resolve()
                }
            }

            this.progress.increaseLimit(remaining)
            Array.from(files).forEach(file => {
                this.progress.run((progressResolve, progressReject) => {
                    if (!filteredCallback || filteredCallback(file)) {
                        this.ui.waitRendering(() => {
                            this.files.push({
                                original: file,
                                progress: new ProgressHandler(this.ui, this.percentageTextTemplate),
                                preview: null,
                            })

                            progressResolve()
                            left()
                        })
                        return
                    }

                    progressReject()
                    left()
                })
            })
        })
    }

    length() {
        return this.files.length
    }

    clear() {
        this.files = []
        this.progress.reset()
    }

    processPreview() {
        return new Promise(resolve => {
            let remaining = this.files.length
            const left = () => {
                --remaining
                if (remaining === 0) {
                    resolve()
                }
            }

            this.progress.increaseLimit(remaining)
            this.files.forEach(file => {
                this.progress.run((progressResolve, progressReject) => {
                    this.processFilePreview(file, () => {
                        progressResolve()
                        left()
                    }, () => {
                        progressReject()
                        left()
                    })
                })
            })
        })
    }

    processFilePreview(file, doneCallback = null, errorCallback = null) {
        const reader = new FileReader()
        reader.onerror = () => {
            errorCallback && errorCallback()
        }
        reader.onabort = () => {
            errorCallback && errorCallback()
        }
        reader.onload = e => {
            this.ui.waitRendering(() => {
                file.preview = e.target.result

                doneCallback && doneCallback()
            })
        }
        this.ui.waitRendering(() => reader.readAsDataURL(file.original))

        return this
    }

    processChunks(everyChunkCallback, everyDoneCallback = null, everyErrorCallback = null, everyPromisedBeforeCallback = null, continuously = false) {
        let chunkSize = this.maxUploadFileSize / 2
        if (chunkSize > this.maximumChunkSize) {
            chunkSize = this.maximumChunkSize
        }

        return new Promise(resolve => {
            let remaining = this.files.length
            const left = () => {
                --remaining
                if (remaining === 0) {
                    resolve()
                }
            }

            this.progress.increaseLimit(remaining)
            this.files.forEach(file => {
                const run = (data = null) => {
                    this.progress.run((progressResolve, progressReject) => {
                        continuously ?
                            this.processFileChunksContinuously(file, chunkSize, everyChunkCallback, data).then(() => {
                                progressResolve()
                                everyDoneCallback && everyDoneCallback(file)
                                left()
                            }).catch(() => {
                                progressReject()
                                everyErrorCallback && everyErrorCallback(file)
                                left()
                            })
                            : this.processFileChunks(file, chunkSize, everyChunkCallback, data).then(() => {
                                progressResolve()
                                everyDoneCallback && everyDoneCallback(file)
                                left()
                            }).catch(() => {
                                progressReject()
                                everyErrorCallback && everyErrorCallback(file)
                                left()
                            })
                    })
                }

                (everyPromisedBeforeCallback && everyPromisedBeforeCallback(file).then(run).catch(left)) || run()
            })
        })
    }

    processFileChunks(file, chunkSize, chunkCallback, data = null) {
        return new Promise((resolve, reject) => {
            const fileSplitter = new FileSplitter(file.original, chunkSize)
            let remaining = fileSplitter.length()
            const left = () => {
                --remaining
                if (remaining === 0) {
                    resolve()
                }
            }

            file.progress.increaseLimit(remaining)
            fileSplitter.every((chunkData, chunkIndex, chunksTotal) => {
                file.progress.run((progressResolve, progressReject) => {
                    this.ui.waitRendering(() => {
                        chunkCallback(chunkData, chunkIndex, chunksTotal, () => {
                            progressResolve()
                            left()
                        }, () => {
                            progressReject()
                            reject()
                        }, file, data)
                    })
                })
            })
        })
    }

    processFileChunksContinuously(file, chunkSize, chunkCallback, data = null) {
        return new Promise((resolve, reject) => {
            const fileSplitter = new FileSplitter(file.original, chunkSize)
            let remaining = fileSplitter.length()
            const left = () => {
                --remaining
                if (remaining === 0) {
                    resolve()
                }
            }

            file.progress.increaseLimit(remaining)

            const process = () => {
                const chunk = fileSplitter.next()
                if (chunk === false) return
                (new Promise((chunkResolve, chunkReject) => {
                    file.progress.run((progressResolve, progressReject) => {
                        this.ui.waitRendering(() => {
                            chunkCallback(chunk.data, chunk.index, chunk.total, () => {
                                progressResolve()
                                chunkResolve()
                                left()
                            }, () => {
                                progressReject()
                                chunkReject()
                                reject()
                            }, file, data)
                        })
                    })
                })).then(process)
            }
            process()
        })
    }
}