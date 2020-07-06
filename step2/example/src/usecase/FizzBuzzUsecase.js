import FizzBuzz from '../domain/FizzBuzz';

export const runFizzBuzz = output => {
  const fz = new FizzBuzz();

  for (let i=1; i<=1000; i++) {
    const num = Math.floor(Math.random()*100) + 1;
    const result = fz.checkFizzBuzz(num);
    output(num, result);
    if (result === "FizzBuzz") return;
  }

  throw new Error('Did not return error in 1000 times');
};