 /*
The parseInt() function parses a string and returns an integer. Here's an example:
var a = parseInt("007");
The above function converts the string "007" to an integer 7. 
If the first character in the string can't be converted into a number, then it returns NaN.

The parseInt() function parses a string and returns an integer. 
It takes a second argument for the radix, which specifies the base of the number in the string.
The radix can be an integer between 2 and 36.

 */

 // Use parseInt() in the convertToInteger function so it converts the 
 //input string str into an integer, and returns it.

 function convertToInteger(str) {

    return parseInt(str);
    }
    
    convertToInteger("56");
    
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
    return parseInt(str, 2);
  }
  convertToInteger("10011");

