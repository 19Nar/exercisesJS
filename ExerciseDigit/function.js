/*

Create a function that takes a number and returns one digit 
that is the result of summing all the digits of the input number. 
When the sum of the digits consists of more than one digit, 
repeat summing unil you get one digit.

rootDigit(123) = 6
// 1 +2 + 3 = 6

rootDigit(999888777) = 9

rootDigit(1238763636555555555555) = 6

*/


function rootDigit(n) {
	while (n.toString().length > 1) {
		n = Number(n.toString().split("").reduce((a,b) => Number(a)+Number(b), 0));
	}
	return n;
}