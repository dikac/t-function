import AssertCallback from "../assert/callback";
import Function from "../function";

/**
 * Throw exception from {@param error} if given {@param value} is not valid according
 * to {@param validation}
 *
 * This can be use to create type assertion
 */

export default function Callback<Return  extends Value, Value>(
    value : Value,
    validation : Function<[Value], boolean>,
    error : Function<[Value], Error>,
) : Return
{
    AssertCallback(value, validation, error);

    return <Return>value;
}
