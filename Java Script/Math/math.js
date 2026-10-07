// Math.abs(x): returns the absolute value of x, i.e., its distance from zero.
// Example: -5 becomes 5 because the distance of -5 from 0 is 5.
// console.log(Math.abs(-5)); // Output: 5

// Math.ceil(x): rounds a number upward to the nearest integer.
// Example: 4.2 rounds up to 5 because 5 is the smallest integer greater than or equal to 4.2.
// console.log(Math.ceil(4.2)); // Output: 5

// Math.floor(x): rounds a number downward to the nearest integer.
// Example: 4.8 becomes 4 because 4 is the greatest integer less than or equal to 4.8.
// console.log(Math.floor(4.8)); // Output: 4

// Math.round(x): rounds a number to the nearest integer.
// Example: 4.5 becomes 5 because .5 rounds upward to the next integer.
// console.log(Math.round(4.5)); // Output: 5

// Math.max(...values): returns the largest number among the given values.
// Example: comparing 1, 5, and 3, the largest value is 5.
// console.log(Math.max(1, 5, 3)); // Output: 5

// Math.min(...values): returns the smallest number among the given values.
// Example: comparing 1, 5, and 3, the smallest value is 1.
// console.log(Math.min(1, 5, 3)); // Output: 1

// Math.pow(base, exponent): returns the base raised to the power of exponent.
// Example: 2^3 = 2 × 2 × 2 = 8.
// console.log(Math.pow(2, 3)); // Output: 8

// Math.sqrt(x): returns the square root of x.
// Example: the square root of 16 is 4 because 4 × 4 = 16.
// console.log(Math.sqrt(16)); // Output: 4

// Math.random(): returns a floating-point number between 0 (inclusive) and 1 (exclusive).
// It generates a random decimal value such as 0.123456, which can be used for random selections.
// console.log(Math.random()); // Output: A random number between 0 and 1

// Math.PI: a constant representing the value of pi (~3.141592653589793).
// It is used in geometry, circles, and trigonometric calculations.
// console.log(Math.PI); // Output: 3.141592653589793

// Math.E: a mathematical constant representing Euler's number (~2.718281828459045).
// It is used in exponential growth, logarithms, and calculus.
// console.log(Math.E); // Output: 2.718281828459045

// Math.sin(x): returns the sine of x in radians.
// Example: sin(π/2) = 1, since the angle 90° in radians is π/2.
// console.log(Math.sin(Math.PI / 2)); // Output: 1

// Math.cos(x): returns the cosine of x in radians.
// Example: cos(0) = 1 because the angle 0 radians points along the positive x-axis.
// console.log(Math.cos(0)); // Output: 1


// Formula to generate a random number between two values (inclusive):
// Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(Math.floor(Math.random() * 10)+1); // Output: A random number between 1 and 10

// console.log(Math.floor(Math.random() * 11)+ 15); // Output: A random number between 15 and 25


// Generate OTP : 

// console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000); // Output: A random 4-digit OTP between 1000 and 9999