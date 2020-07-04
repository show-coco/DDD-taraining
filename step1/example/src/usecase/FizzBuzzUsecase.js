import FizzBuzz from '../domain/FizzBuzz';

export const runFizzBuzz = cb => {
  const fz = new FizzBuzz();
  for (let i=1; i<=100; i++) {
    const result = fz.checkFizzBuzz(i);
    cb(result);
  }
};