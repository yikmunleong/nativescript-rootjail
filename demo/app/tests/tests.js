var Rootjail = require("nativescript-rootjail").Rootjail;
var rootjail = new Rootjail();

describe("greet function", function() {
    it("exists", function() {
        expect(rootjail.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(rootjail.greet()).toEqual("Hello, NS");
    });
});