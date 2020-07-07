import LocalizationHelper from './localization-helper'

const DEFAULT_NUMBER_OF_DECIMAL_POINTS = 2

export class NumberFormatHelper extends LocalizationHelper {
    constructor(localization) {
        super(localization)

        this.numberOfDecimalPoints = DEFAULT_NUMBER_OF_DECIMAL_POINTS
    }

    localize(localization) {
        this.type = localization.number_format
    }

    modeInt() {
        this.mode(0)
        return this
    }

    modeNormal() {
        this.mode(DEFAULT_NUMBER_OF_DECIMAL_POINTS)
        return this
    }

    mode(numberOfDecimalPoints = DEFAULT_NUMBER_OF_DECIMAL_POINTS) {
        this.numberOfDecimalPoints = numberOfDecimalPoints
        return this
    }

    format(number) {
        number = parseFloat(number)
        switch (this.type) {
            case 'point_comma':
                return this.formatPointComma(number)
            case 'point_space':
                return this.formatPointSpace(number)
            case 'comma_point':
                return this.formatCommaPoint(number)
            case 'comma_space':
                return this.formatCommaSpace(number)
            default:
                return number
        }
    }

    formatInt(number) {
        const formatted = this.modeInt().format(number)
        this.modeNormal()
        return formatted
    }

    formatNumber(number, numberOfDecimalPoints = DEFAULT_NUMBER_OF_DECIMAL_POINTS) {
        const formatted = this.mode(numberOfDecimalPoints).format(number)
        this.modeNormal()
        return formatted
    }

    formatPointComma(number) {
        if (this.numberOfDecimalPoints === 0) {
            return number.toFixed(this.numberOfDecimalPoints).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
        return number.toFixed(this.numberOfDecimalPoints).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    }

    formatPointSpace(number) {
        if (this.numberOfDecimalPoints === 0) {
            return number.toFixed(this.numberOfDecimalPoints).replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
        }
        return number.toFixed(this.numberOfDecimalPoints).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
    }

    formatCommaPoint(number) {
        return this.formatPointSpace(number).replace('.', ',').replace(/\s/g, '.')
    }

    formatCommaSpace(number) {
        return this.formatPointSpace(number).replace('.', ',')
    }
}
