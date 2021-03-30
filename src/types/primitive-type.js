import {Type} from './type'

export class PrimitiveType extends Type {
    is(value) {
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

    empty(value) {
        return value === null
            || value === undefined
            || value === false
            || value === 0
            || isNaN(value)
            || (typeof value === 'string' && (value === '' || value.trim() === ''))
    }
}
