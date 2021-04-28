export class FileHelper {
    constructor(numberFormatter) {
        this.numberFormatter = numberFormatter
        this.fileSizeUnits = ['byte', 'bytes', 'KB', 'MB', 'GB', 'TB']
    }

    autoDisplaySize(size, callback = null, unitSeparator = ' ') {
        let unitIndex = 0

        if (size > 1) {
            unitIndex = 1
            while (size > 1024) {
                size /= 1024
                ++unitIndex
            }
        }

        if (callback === true) {
            size = size.toFixed()
        } else if (typeof callback === 'number') {
            size = size.toFixed(callback)
        } else if (typeof callback === 'function') {
            size = callback(size)
        }
        return size + unitSeparator + this.fileSizeUnits[unitIndex]
    }

    autoLocalizedDisplaySize(size, unitSeparator = ' ') {
        return this.autoDisplaySize(size, (size) => {
            return size !== parseInt(size.toString()) ?
                this.numberFormatter.formatNumber(size) : this.numberFormatter.formatInt(size)
        }, unitSeparator)
    }

    checkFile(file, {
        allowedExtensions = null,
        allowedExtensionsErrorCallback = null,
        maxSize = null,
        maxSizeErrorCallback = null,
    }) {
        if (allowedExtensions) {
            if (!file.name.includes('.') || !allowedExtensions.includes(file.name.split('.').pop())) {
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

    /**
     *
     * @param {String[]} extensions
     * @param {String} delimiter
     * @returns {String}
     */
    acceptedExtensions(extensions, delimiter = ', ') {
        return extensions
            .map(extension => extension.startsWith('.') ? extension : '.' + extension)
            .join(delimiter)
    }
}
