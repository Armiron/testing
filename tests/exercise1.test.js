const exercise = require("../exercise1");

describe('fizzBuzz', () => {
  const notTypeNumberValues = [
    // /int, /float, char, string, arr, obj, null values
    null, 
    undefined, 
    "", 
    false,
    true,
    "1",
    "a",
    {},
    []
  ];
  it.each([notTypeNumberValues])(
    'should throw if the input type is not a number', 
    (input) => {
      expect(() => { exercise.fizzBuzz(input); }).toThrow();
    }
  );

  it('should return FizzBuzz if the input is divisible by 3 and 5', () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it('should return Fizz if the input is only divisible by 3', () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it('should return Buzz if the input is only divisible by 5', () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it('should return input if is a number thats not divisible by 3 or 5', () => {
    const result = exercise.fizzBuzz(1);
    expect(result).toBe(result);
  });
});