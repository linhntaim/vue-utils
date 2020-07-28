export class FileHelper {
    constructor(numberFormatter) {
        this.numberFormatter = numberFormatter
        this.fileSizeType = ['byte', 'bytes', 'KB', 'MB', 'GB']
    }

    asSize(fileSize) {
        return this.asSizeWithTypeIndex(fileSize)
    }

    asSizeWithTypeIndex(fileSize, typeIndex = 1) {
        if (fileSize > 1024) {
            return this.asSizeWithTypeIndex(fileSize / 1024, ++typeIndex)
        }

        if (typeIndex === 1 && fileSize <= 1) {
            typeIndex = 0
        }

        return (fileSize - parseInt(fileSize) > 0 ?
            this.numberFormatter.formatNumber(fileSize) : this.numberFormatter.formatInt(fileSize))
            + ' ' + this.fileSizeType[typeIndex]
    }

    checkFile(file, {allowedExtensions = null, allowedExtensionsErrorCallback = null, maxSize = null, maxSizeErrorCallback = null}) {
        if (allowedExtensions) {
            if (file.name.includes('.') || allowedExtensions.includes(file.name.split('.').pop()) === -1) {
                allowedExtensionsErrorCallback && allowedExtensionsErrorCallback()
                return false
            }
        }
        if (maxSize) {
            if (file.size > maxSize) {
                maxSizeErrorCallback && maxSizeErrorCallback()
                return false
            }
        }
        return true
    }
}
