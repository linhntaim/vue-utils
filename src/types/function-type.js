import {Type} from './type'

export class FunctionType extends Type {
    is(value) {
        return typeof value === 'function'
    }

    empty(value) {
        return value === null
    }
}
