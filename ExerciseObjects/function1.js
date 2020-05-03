
//Write a JavaScript program to list the properties of a JavaScript object. 

var student = { 
name : "David Rayy", 
class : "VI", 
rollno : 12 };

// Delete a property from an object and print before or after deleting

var student =  { name : "David Rayy", class : "VI", rollno : 12  };
  console.log(student);
  delete student.rollno;
  console.log(student);

  // We can clone an object with the Object.assign() method
let myObj = {a:1, b:2}
let copy = Object.assign({}, myObj)
console.log(copy)
// the result will be  {a: 1, b: 2}

/* Create a function that takes an object argument sizes 
(contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
*/

const volumeOfBox = ({ width, length, height }) => width * length * height;
//const volumeOfBox = (sizes) => sizes.width * sizes.length * sizes.height;


const profit = prod => Math.round((prod.sellPrice - prod.costPrice) * prod.inventory);