// The `let` keyword creates a variable. JavaScript uses the `number` data
// type for both whole numbers and decimal numbers.
// let a = 20;       // An integer (whole number)
// console.log(typeof a)
// let b = 335.334;  // A decimal (floating-point number)
// console.log(typeof b)
// console.log(b);   // Displays 335.334 in the console
// console.log(a);   // Displays 20 in the console

// A string is a sequence of text characters. Strings can be enclosed in
// double quotes or single quotes; both forms create the `string` data type.
// let c = "ST jksl lsugtuoi kljg"; // String using double quotes
// let d = "Vaibhav";                // Another string value
// let s = 'sgjsdklgh';               // String using single quotes

// console.log() can print multiple values. They appear in the same order
// in which they are passed to the function.
// console.log(c, d, s);

// A boolean represents one of two logical states: `true` or `false`.
// Booleans are commonly used to track conditions, such as login status.
// let login = true;
// let f = false;
// console.log(login, f);

// If a variable is declared without an initial value, its value is
// `undefined`, which means that no value has been assigned yet.
// let user;
// console.log(typeof user);

// console.log(user); // Displays undefined

// let bgint = 932053209458538n;
// console.log(bgint);

// let n = null;
// console.log(typeof n);
// console.log(n);

// const id = Symbol("id");
// console.log(typeof id);
// console.log(id)

// let arr = [24,324,"Vaibhav",true];
// console.log(typeof arr);
// console.log(a);

// let obj = {
//     name : "Vaibhav",
//     age : 24,
//     categary : "General"
// };
// console.log(typeof obj);

// console.log(obj);

// let s = function add(){
//     console.log("Hello World!");
// }

// console.log(typeof s);

// A function can be stored in a variable. Here, `s` stores the `add` function.
// Calling `s()` executes the function and displays "Hello World!".
// s();

// Logging the variable displays the function itself.
// console.log(s);

// Primitive data types are immutable in js 

// let p = 10;
// p = 20;

// console.log(p);

// let im = "Vaibhav";

// console.log(im[0]);

// im = "Richa";

// console.log(im[0]);

// Non Primitive data types are mutable in js

// let arr = [10,20,30,40];
// arr[0] = 100;
// arr.push(50);
// console.log(arr);

// let obj = {
//     name : "Vaibhav",
//     age : 24,
//     categary : "General"
// };

// obj.name = "Vibha";

// console.log(obj);

// pass by value

// let x = 20;

// let y = x;

// y = 50;

// console.log(x , y);

// pass by reference

// let o = {
//     name : "vibha",
//     age : 24
// };

// let ooo = o;

// console.log(o);
// console.log(ooo);

// ooo.name = "vaibhav";

// console.log(o);
// console.log(ooo);