const { generateText, checkAndGenerate } = require("./util");
// unit test function
test("generate name and age", () => {
  const result = generateText("Muhannad", 30);
  expect(result).toBe("Muhannad (30 years old)");
  const result2 = generateText(undefined, undefined);
  expect(result2).toBe("undefined (undefined years old)");
});

test("should generate a valid text output", () => {
  const result = checkAndGenerate("Muhannad", 30);
  expect(result).toBe("Muhannad (30 years old)");
});
