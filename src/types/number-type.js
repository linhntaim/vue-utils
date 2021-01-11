import {PrimitiveType} from './primitive-type'

export class NumberType extends PrimitiveType {
    is(value) {
        return typeof value === 'number'
            || !isNaN(+value)
    }

    empty(value) {
        return value === 0 || isNaN(value)
    }

    int(value) {
        if (this.is(value)) {
            return parseInt((+value).toString())
        }
        return parseInt(value) | 0
    }

    float(value) {
        if (this.is(value)) {
            return parseFloat((+value).toString())
        }
        const float = parseFloat(value)
        return isNaN(float) ? 0 : float
    }

    /**
     *
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     *
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    random(min, max) {
        return Math.random() * (max - min) + min
    }
}
