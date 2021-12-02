// How many tests?
// Base guideline is that:
// The number of unit test for a function should be grater than or 
// equal to the number of execution paths

// module.exports.absolute = function (number) {
//   if (number > 0) return number;
//   if (number < 0) return -number;
//   return 0;
// }

const lib = require("../lib");

// Grouping related test in a describe block
describe("absolute", () => {
  /*test*/it("/*absolute*/ - should return a positive number if input is positive", () => {
    const result = lib.absolute(1); // Avoid specific numbers cs someone might wonder like... dafuq!
    expect(result).toBe(1);
  });
  
  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  
  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});



