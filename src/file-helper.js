export class FileHelper {
    constructor(numberFormatHelper) {
        this.numberFormatHelper = numberFormatHelper
        this.fileSizeType = ['byte', 'bytes', 'KB', 'MB', 'GB']
    }

    asSize(fileSize) {
        return this.asSizeWithTypeIndex(fileSize)
    }

    asSizeWithTypeIndex(fileSize, typeIndex = 1) {
        if (fileSize > 1024) {
            return this.asSize(fileSize / 1024, ++typeIndex)
        }
        if (typeIndex === 1 && fileSize <= 1) {
            typeIndex = 0
        }

        return (fileSize - parseInt(fileSize) > 0 ?
            this.numberFormatHelper.formatNumber(fileSize) : this.numberFormatHelper.formatInt(fileSize))
            + ' ' + this.fileSizeType[typeIndex]
    }
}
