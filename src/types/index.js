import {FunctionType} from './function-type'
import {PrimitiveType} from './primitive-type'
import {StringType} from './string-type'
import {NumberType} from './number-type'
import {ObjectType} from './object-type'
import {ArrayType} from './array-type'

export * from './type'

export {
    FunctionType,
    PrimitiveType,
    StringType,
    NumberType,
    ObjectType,
    ArrayType,
}

export const TypeFunction = new FunctionType()
export const TypePrimitive = new PrimitiveType()
export const TypeString = new StringType()
export const TypeNumber = new NumberType()
export const TypeObject = new ObjectType()
export const TypeArray = new ArrayType()

export function empty(value) {
    if (TypePrimitive.is(value)) {
        return TypePrimitive.empty(value)
    }
    if (TypeFunction.is(value)) {
        return TypeFunction.empty(value)
    }
    if (TypeArray.is(value)) {
        TypeArray.empty(value)
    }
    return TypeObject.empty(value)
}

export function clone(value) {
    if (TypePrimitive.is(value)) {
        return TypePrimitive.clone(value)
    }
    if (TypeFunction.is(value)) {
        return TypeFunction.clone(value)
    }
    if (TypeArray.is(value)) {
        TypeArray.clone(value)
    }
    return TypeObject.clone(value)
}