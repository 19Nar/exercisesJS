/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
The syntax is:
condition ? statement-if-true : statement-if-false;
The following function uses an if-else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}

This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
*/

/*
Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
The function should return either "Equal" or "Not Equal".
*/

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }

  // OR

  function checkEqual(a, b) {
    return a === b ? true : false;
  }
  
  checkEqual(1, 2);

// Use multiple conditional operators in the checkSign function 
//to check if a number is positive, negative or zero. 
//The function should return "positive", "negative" or "zero".


  function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
  }
  
  checkSign(10);
  