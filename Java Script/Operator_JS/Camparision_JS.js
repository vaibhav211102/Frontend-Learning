// Comparison Operators in JavaScript
let a = 10;
let b = 20;

// Equal to (==)
console.log("Is a equal to b?", a == b); // Output: Is a equal to b? false  

// Not equal to (!=)
console.log("Is a not equal to b?", a != b); // Output: Is a not equal to b? true

// Strict equal to (===)
console.log("Is a strictly equal to b?", a === b); // Output: Is a strictly equal to b? false

// Strict not equal to (!==)
console.log("Is a strictly not equal to b?", a !== b); // Output: Is a strictly not equal to b? true

// Greater than (>)
console.log("Is a greater than b?", a > b); // Output: Is a greater than b? false

// Less than (<)
console.log("Is a less than b?", a < b); // Output: Is a less than b? true

// Greater than or equal to (>=)
console.log("Is a greater than or equal to b?", a >= b); // Output: Is a greater than or equal to b? false
// Less than or equal to (<=)
console.log("Is a less than or equal to b?", a <= b); // Output: Is a less than or equal to b? true


// The difference between == and === is that == checks for equality of values, while === checks for equality of both values and types. For example:
let c = "10";
console.log("Is a equal to c?", a == c); // Output: Is a equal to c? true (because the value is the same, but the type is different)
console.log("Is a strictly equal to c?", a === c); // Output: Is a strictly equal to c? false (because the type is different)   

let d = "123ac";

let e = Number(d); // Convert string to number
console.log("Value of e:", e); // Output: Value of e: NaN (Not a Number, because "123ac" cannot be converted to a valid number)

console.log(typeof e); // Output: type of e: number (even though the value is NaN, the type is still number)