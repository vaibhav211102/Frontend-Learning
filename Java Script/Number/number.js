// The Number data type is used to store numeric values in JavaScript.
// It can represent both whole numbers, such as 10, and decimal values,
// such as 3.2425. JavaScript uses the Number type for most ordinary numbers.

// Declare a whole number using the let keyword.
// The variable can be reassigned later because it was declared with let.
// let a = 10;
// Declare a number containing digits after the decimal point.
// let f = 3.2425;

// Display both values in the console.
// The comma separates the two arguments, so they are printed together.
// console.log(a,f);


// Store a number with several decimal places in the variable b.
// let b = 323.234234;
// toFixed(2) converts the number to a string rounded to two digits
// after the decimal point. For example, this would display "323.23".
// Note that the result is a string, not a Number.
// console.log(b.toFixed(2));

// Confirming the return type of toFixed() would print "string".
// console.log(typeof b.toFixed(2));

// toPrecision(6) formats the number to a total of six significant digits.
// Depending on the value, the result may use decimal or exponential notation.
// console.log(b.toPrecision(6));

// toString() converts the numeric value into its text representation.
// This prints the characters "323.234234" to the console.
// console.log(b.toString());

// typeof reports the original data type of b, which is "number".
// console.log(typeof b)

// These create separate Number objects, so they would not refer to the same object.
// let a = new Number(20);
// let b = new Number(20);

// Create an object with a name property.
// let o1 = {
//     name : "Vaibhav"
// };

// Creating another object with the same contents would still create a different reference.
// let o2 = {
//     name : "Vaibhav"
// };

// Assigning o1 to o2 copies the object reference, not the object itself.
// let o2 = o1;

// Both variables point to the same object, so loose equality returns true.
// console.log(o1 == o2);

// These would compare two different Number object references.
// console.log(a == b);
// Check the data type of a Number object.
// console.log(typeof a);
