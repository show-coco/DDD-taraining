import { runFizzBuzz } from '../usecase/FizzBuzzUsecase';

export const presentFizzBuzz = () => runFizzBuzz((num, result) => console.log(num, result));
