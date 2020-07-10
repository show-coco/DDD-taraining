export default class FizzBuzz {
  handleFizzBuzz(num) {
    // validation of num
    if(
      Math.round(num) !== num ||
      typeof num === 'String'
    ) return NaN

    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  }

  handleExit(str) {
    if(str === "FizzBuzz") {
      return true;
    }
    return false;
  }
}