import { randomFizzBuzz } from '../usecase/FizzBuzzUsecase';

export const runFizzBuzz = () => randomFizzBuzz((str) => console.log(str));
