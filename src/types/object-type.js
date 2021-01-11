import {Type} from './type'

export class ObjectType extends Type {
    is(value) {
        return value !== null
            && !Array.isArray(value)
            && typeof value === 'object'
    }

    empty(value) {
        return Object.keys(value).length === 0
    }

    clone(value) {
        return Object.assign({}, value)
    }

    only(object, keys) {
        const only = {}
        keys.forEach(key => {
            only[key] = key in object ? object[key] : null
        })
        return only
    }

    merge(object1, object2) {
        Object.keys(object2).forEach(key => {
            object1[key] = object2[key]
        })
        return object1
    }

    hasKey(object, key) {
        return Object.keys(object).includes(key)
    }

    hasValue(object, value) {
        return Object.values(object).includes(value)
    }
}
