import {Type} from './type'
import {StringType} from './string-type'

export class PrimitiveType extends Type {
    constructor() {
        super()
    }

    static is(value) {
        if (value === null) return true

        const type = typeof value
        return ([
            'undefined',
            'boolean',
            'number',
            'bigint', // ECMAScript 2020
            'string',
            'symbol', // ECMAScript 2015
        ].includes(type))
    }

    static clone(value) {
        return value
    }

    static empty(value) {
        return value === null
            || value === undefined
            || value === false
            || value === 0
            || isNaN(value)
            || (StringType.is(value) && StringType.empty(value))
    }
}