import TypeGuard from "../boolean/function";
import ThrowableType from "../assert/throwable/function";
import GuardFunction from "./callback";
import FunctionType from "../function";

/**
 * return {@param value} if type is function or
 * throw error from {@param error}
 */
export default function Function<
    Assumption extends FunctionType
>(
    value : any,
    error : FunctionType<[any], Error> = ThrowableType
) : Assumption {

    GuardFunction(value, TypeGuard, error)

    return value;
}
