import {ArrayType} from './array-type'
import {Type} from './type'

export class ObjectType extends Type {
    static is(value) {
        return value !== null
            && !ArrayType.isArray(value)
            && typeof value === 'object'
    }

    static clone(value) {
        return Object.assign({}, value)
    }

    static empty(value) {
        return Object.keys(value).length === 0
    }

    static only(object, keys) {
        const only = {}
        keys.forEach(key => {
            only[key] = key in object ? object[key] : null
        })
        return only
    }

    static merge(object1, object2) {
        Object.keys(object2).forEach(key => {
            object1[key] = object2[key]
        })
        return object1
    }

    static hasKey(object, key) {
        return Object.keys(object).includes(key)
    }

    static hasValue(object, value) {
        return Object.values(object).includes(value)
    }
}