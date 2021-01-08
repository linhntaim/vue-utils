import {PrimitiveType} from './primitive-type'
import {ArrayType} from './array-type'
import {ObjectType} from './object-type'
import {FunctionType} from './function-type'

export class Type {
    constructor() {
    }

    static is(value) {
        return true
    }

    static clone(value) {
        if (PrimitiveType.is(value)) {
            return PrimitiveType.clone(value)
        }
        if (FunctionType.is(value)) {
            return FunctionType.clone(value)
        }
        if (ArrayType.is(value)) {
            ArrayType.clone(value)
        }
        return ObjectType.clone(value)
    }

    static empty(value) {
        if (PrimitiveType.is(value)) {
            return PrimitiveType.empty(value)
        }
        if (FunctionType.is(value)) {
            return FunctionType.empty(value)
        }
        if (ArrayType.is(value)) {
            ArrayType.empty(value)
        }
        return ObjectType.empty(value)
    }
}