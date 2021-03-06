import Memoize from "../dist/memoize-from-object";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("basic", function() {

    let called = 0;
    let memoize = Memoize({callback:function (number : number) : number {

        called++;
        return number + number;
    }, argument:[1]});


    it("check initial data", () => {

        expect(called).toBe(0)
        expect(memoize.container.subject.argument).toEqual([1])
        expect(memoize.container.memoize.memoized).toBeFalse();

    });

    it("call", () => {

        expect(memoize()).toBe(2)
        expect(memoize.container.return).toBe(2)

        expect(called).toBe(1)
        expect(memoize.container.memoize.memoized).toBeTrue();
    });

    it("2nd call", function() {

        expect(memoize()).toBe(2)
        expect(memoize.container.return).toBe(2)
        expect(called).toBe(1)
        expect(memoize.container.memoize.memoized).toBeTrue();
    });

    describe("modify", function() {

        it("change argument", () => {
            memoize.container.subject.subject.argument = [2];
            expect(memoize()).toBe(2)
        });

        it("reset", () => {
            memoize.container.memoize.clear();

            expect(called).toBe(1)
            expect(memoize()).toBe(4)
            expect(memoize.container.return).toBe(4)
            expect(called).toBe(2)
        });

    });

});




