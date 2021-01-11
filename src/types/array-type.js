import {ObjectType} from './object-type'

export class ArrayType extends ObjectType {
    is(value) {
        return Array.isArray(value)
    }

    empty(value) {
        return value.length === 0
    }

    clone(value) {
        return Array.from(value)
    }

    only(array, keys) {
        const only = []
        keys.forEach(key => {
            only.push(key >= 0 && key < array.length ? array[key] : null)
        })
        return only
    }

    merge(array1, array2) {
        array2.forEach(value => {
            array1.push(value)
        })
        return array1
    }

    hasKey(array, key) {
        return key >= 0 && key <= array.length
    }

    hasValue(array, value) {
        return array.includes(value)
    }

    /**
     *
     * @param {Number} start
     * @param {Number} end
     * @param {Number} step
     * @returns {Number[]}
     */
    range(start, end, step = 1) {
        const range = []
        if (step < 0) step = -step
        if (start <= end) {
            for (let i = start; i <= end; i += step) {
                range.push(i)
            }
        } else {
            for (let i = start; i >= end; i -= step) {
                range.push(i)
            }
        }
        return range
    }
}
