const fizzbuzz = require("./index.js");

test('3 returns fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});
test('5 returns buzz', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});
test('15 returns fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});
test('1 returns 1', () => {
    expect(fizzbuzz(1)).toBe("1");
});
test('toto returns error', () => {
    expect(fizzbuzz("toto")).toBe(undefined);
});
test('empty string returns error', () => {
    expect(fizzbuzz("")).toBe(undefined);
});
test('-10 returns error', () => {
    expect(fizzbuzz(-10)).toBe("error");
});
test('1.1 returns error', () => {
    expect(fizzbuzz(1.1)).toBe("error");
});
test('0 returns fizzbuzz', () => {
    expect(fizzbuzz(0)).toBe("fizzbuzz");
});
test('53 returns 53', () => {
    expect(fizzbuzz(53)).toBe("53");
});
test('105 returns error', () => {
    expect(fizzbuzz(105)).toBe("error");
});
test('90 returns fizzbuzz', () => {
    expect(fizzbuzz(90)).toBe("fizzbuzz");
});
// test('adds 1 + 2 to equal 3', () => {
//    expect(sum(1, 2)).toBe(3);
//  });