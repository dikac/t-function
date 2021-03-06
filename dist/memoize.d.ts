import ReturnMemoize from "./return/memoize-from-object";
import Callback from "./return/callback";
import Callable from "./callable";
/**
 * wrap given {@param callback} to new function and cache its return, with
 * memoization control option but less performant than {@link ./memoize-static.ts}
 *
 * @param argument
 * used if cached return is not exits
 *
 * @callback
 * callback to be wrapped
 */
export default function Memoize<FunctionType extends Callable>(callback: FunctionType, ...argument: Parameters<FunctionType>): (() => ReturnType<FunctionType>) & {
    container: ReturnMemoize<Callback<FunctionType>>;
};
