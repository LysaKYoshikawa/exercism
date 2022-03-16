//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  let stepsCounter = 0;

  function isOdd(value) {
    return value % 2 != 0
  }

  if(number <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  while (number != 1) {
    stepsCounter++;
    number = number / 2; 

    if (isOdd(number) && number != 1) {
      stepsCounter++;
      number = number * 3 + 1
    }
  }

  return stepsCounter;
};
