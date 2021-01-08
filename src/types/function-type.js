import {Type} from './type'

export class FunctionType extends Type {
    constructor() {
        super()
    }

    static is(value) {
        return typeof value === 'function'
    }

    static clone(value) {
        return value
    }

    static empty(value) {
        return value === null
    }
}