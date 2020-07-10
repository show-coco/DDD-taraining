import FizzBuzz from '../domain/fizzbuzz';

export const runRandomizedFizzBuzz = (cb) => {
  let randomNum;
  let result;
  let exitFlag = false;
  
  const fz = new FizzBuzz();
  while(!exitFlag) {
    randomNum = Math.floor(Math.random() * 100);;
    result = fz.handleFizzBuzz(randomNum);
    cb(result);
    exitFlag = fz.handleExit(result);
  }
}