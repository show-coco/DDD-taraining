import {runRandomizedFizzBuzz} from '../usecase/runRandomizedFizzBuzz';

export const presentFizzBuzz = () => {
  runRandomizedFizzBuzz((result) => console.log(result));
}