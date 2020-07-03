import FizzBuzz from '../domain/fizzbuzz';

export const callFizzBuzz = () => {
  const fz = new FizzBuzz();
  for(let i = 0; i <= 100; i++) {
    console.log(fz.handleFizzBuzz(i));
  }
}