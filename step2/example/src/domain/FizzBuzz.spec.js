import FizzBuzz from './fizzbuzz';

describe('FizzBuzz', () => {
  const fz = new FizzBuzz();

  describe('.handleFizzBuzz()', () => {
    it('returns "Fizz" if argument is 3', () => {
      const result = fz.handleFizzBuzz(3);
      expect(result).toBe("Fizz");
    })
    it('returns "Fizz" if argument is multiple of 3', () => {
      const result = fz.handleFizzBuzz(12);
      expect(result).toBe("Fizz");
    })

    it('returns "Buzz" if argument is multiple of 5', () => {
      const result = fz.handleFizzBuzz(25);
      expect(result).toBe("Buzz");
    })

    it('returns "FizzBuzz" if argument is multiple of 3 and 5', () => {
      const result = fz.handleFizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    })

    it('returns number if argument is not multiple of 3 or 5', () => {
      const result = fz.handleFizzBuzz(2);
      expect(result).toBe(2);
    })

    it('returns NaN if argument is not valid num of 1.5(float num)', () => {
      const result = fz.handleFizzBuzz(1.5);
      expect(result).toBe(NaN);
    })

    it('returns NaN if argument is not valid num of "Hello"(String)', () => {
      const result = fz.handleFizzBuzz('Hello');
      expect(result).toBe(NaN);
    })
  })

  describe('.handleExit()', () => {
    it('returns true if argument is "FizzBuzz"', () => {
      const result = fz.handleExit("FizzBuzz");
      expect(result).toBe(true);
    })

    it('returns true if argument is not "FizzBuzz"', () => {
      const result = fz.handleExit("Fizz");
      expect(result).toBe(false);
    })
  })
});