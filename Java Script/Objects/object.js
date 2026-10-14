// JavaScript Objects
// Objects are used to store related data in a single container.
// Each property is a key-value pair, where the key is a string (or Symbol)
// and the value can be any data type such as a string, number, boolean,
// array, function, or even another object.

// 1) Creating an object
const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    amount: 1000,
    "home address": "123 Main St",    // Property with spaces in its name
    "phone-number": "123-456-7890"    // Property with hyphen in its name
};

console.log("Object created:");
console.log(user);

// 2) Accessing object properties
// Dot notation is used when the property name is valid identifier.
console.log("Dot notation:");
console.log(user.name);
console.log(user.age);

// Bracket notation is required when property name contains spaces, hyphens,
// or when property name is dynamic.
console.log("Bracket notation:");
console.log(user["home address"]);
console.log(user["phone-number"]);

// 3) Adding, updating, and deleting properties
user.aadhar = "1234-5678-9012";     // Add new property
user.amount = 2000;                 // Update existing property
console.log("After adding/updating properties:");
console.log(user);

delete user.email;                   // Delete a property
console.log("After deleting email:");
console.log(user);

// 4) Reference behavior
// Objects are reference types. If one variable points to an object,
// changing it via another variable changes the same object.
const user2 = user;
user2.name = "Jane";
console.log("Reference example:");
console.log(user.name); // Output: Jane

// 5) Object utility methods
console.log("Object.keys(user):", Object.keys(user));
console.log("Object.values(user):", Object.values(user));
console.log("Object.entries(user):", Object.entries(user));

// 6) Looping through object properties
// for...in loops through the keys of an object.
console.log("for...in loop:");
for (const key in user) {
    console.log(key, user[key]);
}

// 7) Destructuring an object
// Destructuring lets us extract values directly into variables.
const { name, age, email } = user;
console.log("Destructuring basic:");
console.log(name, age, email);

// Renaming destructured variables
const { name: userName, age: userAge, email: userEmail } = user;
console.log("Destructuring with aliasing:");
console.log(userName, userAge, userEmail);

// 8) Iterating keys, values, and entries with Object methods
console.log("Object.keys(user):");
for (let keys of Object.keys(user)) {
    console.log(keys);
}

console.log("Object.values(user):");
for (let values of Object.values(user)) {
    console.log(values);
}

console.log("Object.entries(user):");
const temp = Object.entries(user);
for (let [key, value] of temp) {
    console.log(key, value);
}

// 9) Methods inside objects
// A method is just a property whose value is a function.
const student = {
    name: "John",
    age: 30,
    email: "john@example.com",
    getDetails: function () {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
};

console.log("Method example:");
console.log(student.getDetails());

// We can also assign the same method to another object.
const anotherStudent = {
    name: "Mohan",
    age: 24,
    email: "mohan@gmail.com"
};

anotherStudent.getDetails = student.getDetails;
console.log(anotherStudent.getDetails());

// 10) Nested objects
const person = {
    name: "John",
    age: 30,
    email: "john@example.com",
    address: {
        city: "Mahendragarh",
        village: "Jhagroli"
    }
};

console.log("Nested object:");
console.log(person);
console.log(person.address);
console.log(person.address.city);

// 11) Shallow copy using spread operator
// This copies only the top-level properties.
const copiedPerson = { ...person };
copiedPerson.name = "Vaibhav";
copiedPerson.email = "vaibhav@gmail.com";
console.log("Shallow copy:");
console.log(copiedPerson);

// 12) Deep copy using structuredClone()
// This creates a true deep clone, so nested objects are copied separately.
const deepCopiedPerson = structuredClone(person);
deepCopiedPerson.address.city = "Bhiwani";
console.log("Deep copy:");
console.log("Original:", person);
console.log("Deep Clone:", deepCopiedPerson);

// 13) Accessing object properties using numeric keys
const numberObject = {
    0: "Vaibhav"
};

console.log("Numeric key access:");
console.log(numberObject[0]);

// 14) Symbols as object keys
// Symbol values are unique and can be used as property keys.
const sym = Symbol("id");
const userWithSymbol = {
    [sym]: "Ram Ram"
};

console.log("Symbol key:");
console.log(userWithSymbol[sym]);

// 15) Summary
// Objects are one of the most important concepts in JavaScript.
// They are used to represent real-world entities and group related data.
// Key topics covered here:
// - creating objects
// - dot/bracket access
// - adding/updating/deleting properties
// - object iteration
// - destructuring
// - nested objects
// - reference vs clone
// - symbol keys

// Practice questions:
// 1. Create an object for a product with name, price, and category.
// 2. Add/update a property and delete one property.
// 3. Loop through object keys and print values.
// 4. Create a nested object and access its inner properties.
// 5. Use destructuring to extract values from an object.


