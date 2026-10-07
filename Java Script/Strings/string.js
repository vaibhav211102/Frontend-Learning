// // String

// const str1 = "Hello, World!";

// const str2 = 'JavaScript is awesome.';

// const str3 = `This is a template literal. 
// It can span multiple lines.`;

// const str4 = "This is a string with a newline character.\nSee?";

// // console.log(str1);
// // console.log(str2);
// // console.log(str3);
// // console.log(str4);

// const str5 = `Today is ${new Date().toDateString()}.`;

// // console.log(str5);

// // String Methods : 

// console.log("The length of str1 is: " + str1.length); // Length of the string

// console.log("The character at index 7 of str1 is: " + str1.charAt(7)); // Character at index 7

// console.log("The index of 'World' in str1 is: " + str1.indexOf("World")); // Index of substring

// const str = "vaibhav is a good boy";

// console.log(str.toUpperCase());

// const str1 = "Hello, World!";

// const s = str1.toLowerCase();

// console.log(s);

const sentence = "The quick brown fox jumps over the lazy dog.";

// console.log(sentence.indexOf("fox")); // Output: 16

// console.log(sentence.lastIndexOf("the")); // Output: 31

// console.log(sentence.includes("jumps")); // Output: true

// console.log(sentence.slice(4, 9)); // Output: "quick"

// console.log(sentence.substring(4, 9)); // Output: "quick"

// console.log(sentence.replace("lazy", "active")); // Output: "The quick brown fox jumps over the active dog."

// console.log(sentence.slice(4));

// console.log(sentence.slice(-1)); // Output: "."

// console.log(sentence.split(" ")); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// const s1 = "Hello, ";
// const s2 = "World!";

// // const s3 = s1 + s2;
// // console.log(s3); // Output: "Hello, World!"

// const s4 = s1.concat(s2);
// console.log(s4); // Output: "Hello, World!"

// const n = "  Hello, World!   ";
// const trimmed = n.trim(); // Removes whitespace from both ends
// console.log(trimmed); // Output: "Hello, World!"

// const i = "   Hello, World!    ";
// const trimmedStart = i.trimStart(); // Removes whitespace from the start
// console.log(trimmedStart); // Output: "Hello, World!"

// const trimmedEnd = i.trimEnd(); // Removes whitespace from the end
// console.log(trimmedEnd); // Output: "   Hello, World!"

// const name = "Vaibhav,Vijay,John,Doe";
// const namesArray = name.split(","); // Splits the string into an array of names
// console.log(namesArray); // Output: ["Vaibhav", "Vijay", "John", "Doe"]

// Remaining String Methods & Concepts in JavaScript

const text = "JavaScript is fun and powerful.";

console.log(text.startsWith("Java")); // true
console.log(text.endsWith("powerful.")); // true
console.log(text.includes("fun")); // true

console.log(text.charCodeAt(0)); // ASCII code of 'J' => 74
console.log(text.codePointAt(0)); // Unicode code point => 74

console.log(String.fromCharCode(74, 97, 118, 97)); // Java
console.log(String.fromCharCode(65, 66, 67)); // ABC

console.log("hello".repeat(3)); // hellohellohello
console.log("5".padStart(4, "0")); // 0005
console.log("5".padEnd(4, "0")); // 5000

const word = "Hello World";
console.log(word.search("World")); // 6
console.log(word.match(/o/g)); // [ 'o', 'o' ]
console.log("apple, banana, orange".split(", ")); // [ 'apple', 'banana', 'orange' ]
console.log("I love JS".replace("JS", "JavaScript")); // I love JavaScript
console.log("I love JS and JS".replaceAll("JS", "JavaScript")); // I love JavaScript and JavaScript

const name1 = "vaibhav";
const name2 = "Vaibhav";
console.log(name1.localeCompare(name2)); // 1 or -1 based on alphabetical comparison
console.log(name1.toLocaleUpperCase()); // VAIBHAV
console.log(name2.toLocaleLowerCase()); // vaibhav

const rawString = String.raw`C:\Users\VAIBHAV\Documents`;
console.log(rawString); // prints raw string without escaping backslashes

const strA = "Java";
const strB = "Script";
console.log(strA.concat(" ", strB)); // Java Script

const email = "  support@example.com  ";
console.log(email.trim()); // support@example.com
console.log(email.trimStart()); // support@example.com  
console.log(email.trimEnd()); //   support@example.com

const strNum = "42";
console.log(strNum.valueOf()); // 42

// Escape sequences in strings
console.log("This is a quote: \"Hello\".");
console.log("Line 1\nLine 2");
console.log("Tab\tSpacing");
console.log("Backslash: \\ ");

// String object example
const sObj = new String("Hello");
console.log(sObj); // String { 'Hello' }
console.log(sObj.length); // 5
console.log(sObj.toUpperCase()); // HELLO

// Extra example with template literals
const user = "Vaibhav";
const course = "JavaScript";
console.log(`Welcome ${user}! You are learning ${course}.`);

// String comparison examples
console.log("a" < "b"); // true
console.log("Apple" === "apple"); // false
console.log("abc".localeCompare("abd")); // -1

// Number to string conversion
console.log(String(123)); // "123"
console.log((456).toString()); // "456"

// Useful notes
// 1. Strings are immutable in JavaScript.
// 2. Many string methods return a new string and don't modify the original.
// 3. String methods work on primitive strings as well as String objects.

console.log("Done with remaining string methods in JavaScript!");

