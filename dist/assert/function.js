var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../guard/function", "../assert/throwable/function", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = __importDefault(require("../guard/function"));
    const function_2 = __importDefault(require("../assert/throwable/function"));
    const callback_1 = __importDefault(require("./callback"));
    /**
     * Throw exception from {@param error} if given {@param value} is no callable type
     */
    function Function(value, error = function_2.default) {
        callback_1.default(value, function_1.default, error);
    }
    exports.default = Function;
});
//# sourceMappingURL=function.js.map