var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../return/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_1 = __importDefault(require("../return/memoize"));
    /**
     * Wrap {@link Return} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class MemoizeFromObject {
        constructor(subject) {
            this.subject = subject;
            this.memoize = new memoize_1.default({
                get return() {
                    return subject.return;
                }
            });
        }
        get return() {
            return this.memoize.return;
        }
    }
    exports.default = MemoizeFromObject;
});
//# sourceMappingURL=memoize-from-object.js.map