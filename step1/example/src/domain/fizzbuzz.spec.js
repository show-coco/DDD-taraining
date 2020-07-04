import FizzBuzz from './fizzbuzz';

describe('FizzBuzz', () => {
  const fz = new FizzBuzz();

  describe('.checkFizzBuzz()', () => {
    it('returns "Fizz" if argument is 3', () => {
      const result = fz.checkFizzBuzz(3);
      expect(result).toBe("Fizz");
    })
    it('returns "Fizz" if argument is multiple of 3', () => {
      const result = fz.checkFizzBuzz(12);
      expect(result).toBe("Fizz");
    })

    it('returns "Buzz" if argument is multiple of 5', () => {
      const result = fz.checkFizzBuzz(25);
      expect(result).toBe("Buzz");
    })

    it('returns "FizzBuzz" if argument is multiple of 3 and 5', () => {
      const result = fz.checkFizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    })

    it('returns number if argument is not multiple of 3 or 5', () => {
      const result = fz.checkFizzBuzz(2);
      expect(result).toBe(2);
    })
  })
});