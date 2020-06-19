var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "../throwable/type", "./assertion"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = __importDefault(require("../boolean/type"));
    const type_2 = __importDefault(require("../throwable/type"));
    const assertion_1 = __importDefault(require("./assertion"));
    /**
     * Throw exception from {@param errorFactory} if given {@param value} is no callable type
     */
    function Type(value, errorFactory = type_2.default) {
        assertion_1.default(value, type_1.default, errorFactory);
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map