// This file demonstrates how JavaScript converts different values to numbers
// using the built-in Number() function.
//
// Boolean values can be converted to numbers as follows:
// true  becomes 1
// false becomes 0
// let number1 = true;
// let number2 = false;

// console.log(number1);
// console.log(number2);

// The following statements would print the numeric equivalents of the
// Boolean variables: 1 and 0.
// console.log(Number(number1));
// console.log(Number(number2));

// null represents an intentional absence of a value. Number(null) converts it
// to 0 because null is treated as an empty numeric value.
// console.log(Number(null));

// undefined means that a value has not been assigned. It cannot be converted
// to a valid number, so Number(undefined) returns NaN (Not-a-Number).
// console.log(Number(undefined));


// String() converts Boolean values into their text representations.
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"

// String() also converts null and undefined into text.
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// Any non-zero number is truthy, so Boolean(-1) returns true.
// console.log(Boolean(-1)); // true

// Zero is falsy, so Boolean(0) returns false.
// console.log(Boolean(0)); // false

// An empty string is falsy, so Boolean("") returns false.
// console.log(Boolean("")); // false

// A non-empty string is truthy, so Boolean("hello") returns true.
// console.log(Boolean("hello")); // true


// let a = 0.1;
// let b = 0.2;

// let c = a + b;

// The following statement would print 
// 0.30000000000000004, which is a result of
// floating-point precision issues in JavaScript.
// console.log(c);
// console.log(c == 0.3); // This will print false due to floating-point precision issues.

// 1. null is loosely equal to undefined, but not strictly equal.

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// With loose equality, null only equals undefined, not 0.
// console.log(null == 0); // false

// Relational comparisons convert null to 0 before comparing.
// console.log(null >= 0); // true
// console.log(null > 0); // false
// console.log(null <= 0); // true
// console.log(null < 0); // false


// When null is compared with undefined, the relational comparison produces
// false because undefined converts to NaN, and comparisons with NaN are false.
// console.log(null >= undefined); // false
// console.log(null > undefined); // false
// console.log(null <= undefined); // false
// console.log(null < undefined); // false

// console.log(10 < "10"); // false, because "10" is converted to 10
// console.log(10 > "10"); // false, because "10" is converted to 10
// console.log(10 <= "10"); // true, because "10" is converted to 10
// console.log(10 >= "10"); // true, because "10" is converted to 10

// console.log(null == 0); // false, because null is only loosely equal to undefined
// console.log(null >= 0); // true, because null is converted to 0 for relational comparisons
// console.log(null > 0);  // false, because null is converted to 0 for relational comparisons
// console.log(null <= 0); // true, because null is converted to 0 for relational comparisons
// console.log(null < 0);  // false, because null is converted to 0 for relational comparisons 

console.log(NaN == NaN); // false, because NaN is not equal to itself
console.log(NaN === NaN); // false, because NaN is not equal to itself