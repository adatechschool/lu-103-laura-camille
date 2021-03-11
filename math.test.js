const sum = require("./math.js");
const math = require("./math.js");

it("adds 1 + 2 equals 3", ()=> {
    expect(math.sum(1,2)).toBe(3);
});

it("removes 2 from 1 equals 1", ()=> {
    expect(math.remove(2,1)).toBe(1);
});
