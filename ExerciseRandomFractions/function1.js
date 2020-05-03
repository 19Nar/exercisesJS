/*
We can generate a random number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use:
Math.floor(Math.random() * (max - min + 1)) + min

*/

/*
Create a function called randomRange that takes a range myMin and myMax 
and returns a random number that's greater than or equal to myMin, 
and is less than or equal to myMax, inclusive.

*/

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin

}