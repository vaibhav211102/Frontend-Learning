// Arrays in JavaScript
// ===================
// Arrays are special objects used to store multiple values in a single variable.
// They are zero-indexed, meaning the first element is at index 0.
// JavaScript arrays can hold mixed data types, can grow dynamically, and support many built-in methods.

// -----------------------------------------------------------------------------
// 1) Creating and printing arrays
// -----------------------------------------------------------------------------

let marks = [45, 78, 89, 90, 67];
console.log("1. marks:", marks);
console.log("Length of marks:", marks.length);

let arr = [100, 30.33, "Hello", true, null];
console.log("2. Mixed-type array:", arr);
console.log("typeof arr:", typeof arr); // Arrays are technically objects in JavaScript.

// -----------------------------------------------------------------------------
// 2) Accessing and updating array values
// -----------------------------------------------------------------------------

arr[0] = 200; // Change the value at index 0.
console.log("3. Updated arr:", arr);

// -----------------------------------------------------------------------------
// 3) Adding and removing elements
// -----------------------------------------------------------------------------

// push() adds an element at the end of the array.
arr.push("World");
console.log("4. After push():", arr);

// pop() removes the last element and returns it.
arr.pop();
console.log("5. After pop():", arr);

// unshift() adds an element at the beginning.
arr.unshift("First");
console.log("6. After unshift():", arr);

// shift() removes the first element.
arr.shift();
console.log("7. After shift():", arr);

// -----------------------------------------------------------------------------
// 4) Looping through arrays
// -----------------------------------------------------------------------------

let a = [1, 2, 3, 4, 5];

console.log("8. for loop:");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

console.log("9. for...in loop:");
for (let i in a) {
  console.log(a[i]);
}

// Note:
// for...in is mainly used for iterating over object keys, but it can also work with arrays.
// for...of is often preferred when working with arrays because it gives direct values.

console.log("10. for...of loop:");
for (let value of a) {
  console.log(value);
}

// -----------------------------------------------------------------------------
// 5) Reference types: same array, same memory
// -----------------------------------------------------------------------------

let n = [1, 2, 3, 4, 5];
let m = n; // m and n point to the same array in memory.

console.log("11. Before mutation:");
console.log("n =", n);
console.log("m =", m);

m.push(6); // This changes the same array object.

console.log("12. After mutation:");
console.log("n =", n); // Also changed.
console.log("m =", m); // Same array reference.

// Explanation:
// JavaScript arrays are reference types.
// When you assign one array variable to another, you are NOT making a copy.
// Both variables point to the same array object in memory.
// So modifying one affects the other.

let copy = [...n]; // Creates a new array with same values.
copy.push(7);

console.log("13. Original array after copying:", n);
console.log("Copied array:", copy);
console.log("Are n and copy the same?", n === copy); // false

// Spread operator (...) creates a new array instead of sharing reference.
// This is a common way to clone arrays.

// -----------------------------------------------------------------------------
// 6) const arrays: cannot reassign variable, but can modify contents
// -----------------------------------------------------------------------------

const j = [1, 2, 3, 4, 5];
console.log("14. const array before modification:", j);

// j = [6, 7, 8, 9, 10]; // This will throw an error because const cannot be reassigned.

j.push(6); // But we can still mutate the array contents.
console.log("15. const array after mutation:", j);

// -----------------------------------------------------------------------------
// 7) slice() and splice()
// -----------------------------------------------------------------------------

const k = [10, 20, 30, 40, 50];

// slice(start, end) creates a new array without modifying original.
const slicedArray = k.slice(1, 4);
console.log("16. Original array k:", k);
console.log("Sliced array:", slicedArray);

// splice(start, deleteCount, item1, item2, ...) modifies original array.
const splicedArray = k.splice(1, 2); // Removes 2 elements starting index 1.
console.log("17. After splice(1, 2):", k);
console.log("Removed elements:", splicedArray);

const p = [10, 20, 30, 40, 50];
const removedItems = p.splice(1, 2, 100, 200);
console.log("18. After splice(1, 2, 100, 200):", p);
console.log("Removed items:", removedItems);

// -----------------------------------------------------------------------------
// 8) Concatenation and cloning
// -----------------------------------------------------------------------------

const q = [10, 20, 30, 40, 50];
const w = [60, 70, 80];

// concat() returns a new array containing both arrays.
const concatenatedArray = q.concat(w);
console.log("19. q.concat(w):", concatenatedArray);

// Spread operator can also be used to merge arrays.
const concatenatedArrayWithSpread = [...q, ...w];
console.log("20. [...q, ...w]:", concatenatedArrayWithSpread);

const o = [...w]; // clone w into a new array
console.log("21. Copied array o:", o);

// -----------------------------------------------------------------------------
// 9) Converting arrays to strings
// -----------------------------------------------------------------------------

const name = ["John", "Doe", "Smith"];
console.log("22. name.toString():", name.toString());
console.log("23. name.join(' - '):", name.join(" - "));

// join() is very useful when you want to display array contents with a custom separator.

// -----------------------------------------------------------------------------
// 10) Searching and checking values
// -----------------------------------------------------------------------------

const n2 = ["John", "Doe", "Smith", "Doe"];

console.log("24. indexOf('Doe'):", n2.indexOf("Doe"));
console.log("25. lastIndexOf('Doe'):", n2.lastIndexOf("Doe"));
console.log("26. includes('Smith'):", n2.includes("Smith"));

// indexOf() returns the first matching index.
// lastIndexOf() returns the last matching index.
// includes() returns true if the value exists.

// -----------------------------------------------------------------------------
// 11) Sorting and reversing
// -----------------------------------------------------------------------------

const str = ["John", "Alice", "Smith", "Doe", "Jane", "Harry", "Zoe"];
const sortedStringArrayAsc = str.slice().sort();
console.log("27. Sorted string array:", sortedStringArrayAsc);

const s = [53453, 234, 1234, 2345, 123, 345, 456, 567, 678, 789];
const sortedArray = s.slice().sort();
console.log("28. Sorted numeric-like array by default sort():", sortedArray);

// Important:
// sort() converts values to strings and compares their string values by default.
// This works for strings, but for numbers it can be surprising.

const numeric = [101, 23, 45, 67, 89, 12, 34, 56, 78, 90];
console.log("29. Before numeric sort:", numeric);
console.log("30. Correct numeric ascending sort:", numeric.slice().sort((a, b) => a - b));

const reversedStringArray = str.slice().reverse();
console.log("31. Reversed string array:", reversedStringArray);

str.sort();
str.reverse();
console.log("32. Sorted and reversed in place:", str);

// sort() and reverse() mutate the original array.
// To avoid changing the original, use slice() before sorting/reversing.

// -----------------------------------------------------------------------------
// 12) Flattening nested arrays
// -----------------------------------------------------------------------------

const c = [101, 23, 45, 67, 89, [12, 34, [56, 78], 90], 1001, 1002, 1003, 1004, 1005];

console.log("33. Nested array c:", c);
console.log("34. c[5][2]:", c[5][2]); // Access nested array inside nested array.
console.log("35. c[5][2][1]:", c[5][2][1]); // Access second element inside the inner nested array.

const flattenedArray = c.flat(Infinity);
console.log("36. Flattened array:", flattenedArray);

// flat(Infinity) deeply flattens nested arrays.
// flat() would flatten only one level.

// -----------------------------------------------------------------------------
// 13) Why arrays in JavaScript are not like traditional arrays
// -----------------------------------------------------------------------------

// In JavaScript, arrays are implemented as objects with special array behavior.
// This gives them advantages like dynamic size, heterogeneous elements, and many built-in methods.

// Key reasons:
// 1. Dynamic sizing: Arrays can grow or shrink without a fixed size.
// 2. Heterogeneous elements: An array can contain numbers, strings, booleans, objects, nulls, etc.
// 3. Indexed properties: Numeric indices are treated like object keys.
// 4. Prototype methods: Arrays inherit from Array.prototype and get built-in behavior.
// 5. Sparse arrays: Some indexes can be empty.
// 6. Memory management is handled by JavaScript itself.
// 7. Flexibility is greater than in fixed-size, type-safe arrays of other languages.

// Trade-offs:
// - Not as memory efficient as low-level arrays in C or Java.
// - Performance may be less predictable in large or heavy operations.
// - There is no strict type safety.
// - Arrays are not true multidimensional arrays by default; nested arrays are used instead.
// - No built-in bounds checking.

// -----------------------------------------------------------------------------
// 14) Adding custom properties to an array
// -----------------------------------------------------------------------------

const t = ["Vaibhav", 21, "Developer", true, null, undefined, 3.14];
t.last = "Kaushik"; // Adding a custom property to the array object.
console.log("37. Array with custom property:", t);
console.log("38. t.last:", t.last);

// Note:
// Arrays can hold custom properties like objects can, but these are not treated as elements.
// They do not affect the array length.

// -----------------------------------------------------------------------------
// 15) Summary
// -----------------------------------------------------------------------------

// Arrays in JavaScript are flexible, powerful, and widely used.
// They support:
// - creation and modification
// - indexing and iteration
// - built-in methods like push, pop, shift, unshift, slice, splice, concat, sort, reverse, etc.
// - nested arrays for complex data structures
// - cloning using spread operator or slice()

console.log("39. End of arrays tutorial");
