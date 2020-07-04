import { runFizzBuzz } from '../usecase/FizzBuzzUsecase';

export const presentFizzBuzz = () => runFizzBuzz((str) => console.log(str));
