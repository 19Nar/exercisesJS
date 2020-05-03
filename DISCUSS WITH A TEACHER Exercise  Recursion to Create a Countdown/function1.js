// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
  }

  function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
  }

  