/*
For example, say you want to write a recursive function that returns an array containing the numbers 1 through n.
 This function will need to accept an argument, n, representing the final number. 
 Then it will need to call itself with progressively smaller values of n until it reaches 1. 
 You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

At first, this seems counterintuitive since the value of n decreases, but the values 
in the final array are increasing. This happens because the push happens last, after 
the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) 
has already been evaluated and returned [1, 2, ..., n - 1].
*/

/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
*/
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

  function countdown(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

 function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }