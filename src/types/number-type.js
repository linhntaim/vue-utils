import {PrimitiveType} from './primitive-type'

export class NumberType extends PrimitiveType {
    constructor() {
        super()
    }

    static is(value) {
        return typeof value === 'number'
            || !isNaN(+value)
    }

    static empty(value) {
        return value === '' || value.trim() === ''
    }

    static int(value) {
        if (NumberType.is(value)) {
            return parseInt((+value).toString())
        }
        return parseInt(value) | 0
    }

    static float(value) {
        if (NumberType.is(value)) {
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
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    /**
     *
     * @param {Number} min
     * @param {Number} max
     * @returns {Number}
     */
    static random(min, max) {
        return Math.random() * (max - min) + min
    }
}