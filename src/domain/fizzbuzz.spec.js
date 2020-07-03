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
  })
});