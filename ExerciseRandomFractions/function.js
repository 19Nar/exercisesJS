/*
Math.random() function that generates a random decimal number between 0 (inclusive) 
and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1
Note
Like Storing Values with the Equal Operator, all function calls will be resolved 
before the return executes, so we can return the value of the Math.random() function.
*/

//Change randomFraction to return a random number instead of returning 0.

function randomFraction() {
  
    return Math.random();
  
  };

  /*
Use Math.random() to generate a random decimal.
Multiply that random decimal by 20.
Use another function, Math.floor() to round the number down to its nearest whole number.
We are calling Math.random(), multiplying the result by 20, 
then passing the value to Math.floor() function 
to round the value down to the nearest whole number.
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
  */

//Generate and return a random whole number between 0 and 9.

function randomWholeNum() {

    return Math.floor(Math.random() * 10);
    }
  