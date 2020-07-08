const functions = require("./unit-test-functions");

const start = () => console.log("start test");
const end = () => console.log("end test");

beforeAll(start);
afterAll(end);

test("calculate tow numbers", () => {
  expect(functions.add(4, 4)).not.toBe(7);
});

test("is it null", () => {
  expect(functions.isNull()).toBe(null);
});

test("is it falsy", () => {
  expect(functions.checkValue(null || undefined)).toBeFalsy();
});

test("check user name object", () => {
  expect(functions.createUser()).toEqual({ firstName: "Muhannad", lastName: "Judah" });
});

test("greater than 1600", () => {
  const a = 1000;
  const b = 700;
  expect(a + b).toBeGreaterThan(1600);
});

test("there in jo i in team", () => {
  expect("teaM").toMatch(/m/i);
});

test("array contains Ahmed ", () => {
  expect(["Muhannad", "Ahmed", "Hana"]).toContainEqual("Ahmed");
});

test("user fetched data use should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});

test("reverse function not undefined", () => {
  expect(functions.reversString).toBeDefined();
});

test("reverse Sting", () => {
  expect(functions.reversString("hello")).toEqual("olleh");
});

test("reverse Sting (case not sensitive)", () => {
  expect(functions.reversString("HELLO")).toEqual("olleh");
});

test("chunk array", () => {
  expect(functions.chunkArray).toBeDefined();
});

test("chunk array", () => {
  expect(functions.chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
  ]);
});

test("check if it is function ", () => {
  expect(typeof functions.isAnagram).toEqual("function");
});

test("isAnagram ", () => {
  expect(functions.isAnagram("stet#", "test")).toBeTruthy();
});
