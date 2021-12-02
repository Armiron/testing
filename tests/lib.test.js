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

describe("greet", () => {
  // Too specific comparison that succombs to simple variation
  // Have to find the right balance between too specific and too general
  // it("should return the greeeting message", () => {
  //   const result = lib.greet("Armiron");
  //   expect(result).toBe("Welcome Armiron");
  // });

  // when testing string to make sure theyre not too specific
  it("should return the greeeting message", () => {
    const result = lib.greet("Armiron");
    expect(result).toMatch(/Armiron/); //either one is good
    //expect(result).toContain("Armiron"); //either one is good
  });

});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    // Too general way
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    // If we sort em in a different way or add one we're done
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    // Proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // Ideal way
    expect(result)
      .toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  })
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    //expect(result).toBe({ id: 1, price: 10}); //test for the location in memory of obj
    //expect(result).toEqual({ id: 1, price: 10}); //considers nr of properties
    expect(result).toMatchObject({ id: 1, price: 10}); //just needs to have those 2 among the properties
    expect(result).toHaveProperty("id", 1 /*if "1" it fails */);

  });
});

describe("registerUser", () => {
  // Normal test the throw path
  // it("should throw if username is falsy", () => {
  //   // Falsy values
  //   // Null
  //   // undefined
  //   // NaN
  //   // ""
  //   // 0
  //   // false

  //   // Cant do it this way with exceptions
  //   // const result = lib.registerUser(null);
  //   // expect(result).toThrow()
    
  //   // Should repeat for each falsy value
  //   expect(() => { lib.registerUser(null); }).toThrow();
  // });

  // Parameterized test

  const falsyValues = [ null, undefined, NaN, "", 0, false];
  it('should throw if username is falsy', () => {
    falsyValues.forEach(element => {
      expect(() => { lib.registerUser(element); }).toThrow();
    });
  });
  

  // added in jest
  it.each([falsyValues])(
    'should throw if username is falsy',
    (input) => {
      expect(() => { lib.registerUser(input); }).toThrow();
    }
  );

  // The other no throw path
  
  it('should return a user object if valid username is passed', () => {
    const result = lib.registerUser("Armiron");
    expect(result).toMatchObject({ username: "Armiron" });
    expect(result.id).toBeGreaterThan(0);
  });


});


