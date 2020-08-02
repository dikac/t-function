import ArgumentInterface from "../argument/argument";
import ReturnInterface from "./return";
import FunctionCall from "../argument/value/call";
import Function from "../function";
import Callback from "../callback/callback";

/**
 * Use {@link ArgumentInterface} as argument to call function form {@link Callback}
 * and set return value to {@link Return}
 */
export default function Call<
    FunctionT extends Function
>(
    object : ArgumentInterface<Parameters<FunctionT>> & Callback<FunctionT> & ReturnInterface<ReturnType<FunctionT>>
) : ArgumentInterface<Parameters<FunctionT>> & Callback<FunctionT> & ReturnInterface<ReturnType<FunctionT>> {

    object.return = FunctionCall(object);

    return <ArgumentInterface<Parameters<FunctionT>> & Callback<FunctionT> & ReturnInterface<ReturnType<FunctionT>>> object;

}
