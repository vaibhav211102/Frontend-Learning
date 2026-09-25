// JAVASCRIPT - LOGICAL OPERATORS COMPLETE

// 1. &&  (Logical AND)
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("AND: Entry Allowed");
} else {
    console.log("AND: Entry Denied");
}


// 2. ||  (Logical OR)
let hasTicket = false;
let hasPass = true;

if (hasTicket || hasPass) {
    console.log("OR: Entry Allowed");
} else {
    console.log("OR: Entry Denied");
}


// 3. !  (Logical NOT)
let isRaining = false;

if (!isRaining) {
    console.log("NOT: You can go outside");
} else {
    console.log("NOT: Take an umbrella");
}


// 4. Combining &&, || and !
let studentAge = 20;
let hasCollegeID = true;
let isBanned = false;

if (studentAge >= 18 && hasCollegeID && !isBanned) {
    console.log("COMBINED: Student can enter");
} else {
    console.log("COMBINED: Student cannot enter");
}


// 5. ??  (Nullish Coalescing)
let username = null;

let displayName = username ?? "Guest";

console.log("??:", displayName);


// 6. Truthy and Falsy
let name = "";

if (name) {
    console.log("TRUTHY: Name exists");
} else {
    console.log("FALSY: Name is empty");
}


// 7. Short-Circuit with &&
let marks = 80;

marks >= 40 && console.log("SHORT-CIRCUIT: Student passed");


// 8. Short-Circuit with ||
let userName = "";

let finalName = userName || "Guest";

console.log("|| Default value:", finalName);


// 9. &&=  (Logical AND Assignment)
let a = 10;

a &&= 20;

console.log("&&=:", a);


// 10. ||=  (Logical OR Assignment)
let b = 0;

b ||= 50;

console.log("||=:", b);


// 11. ??=  (Nullish Assignment)
let c = null;

c ??= 100;

console.log("??=:", c);


// 12. Multiple conditions
let age2 = 22;
let marks2 = 75;
let hasID2 = true;

if ((age2 >= 18 && marks2 >= 50) || hasID2) {
    console.log("MULTIPLE: Condition satisfied");
} else {
    console.log("MULTIPLE: Condition not satisfied");
}


// && : If first value is false, then it will return the first value itself.If the first value is true , then it will return second value.

// || : If first value is true , then it will return the first value and if the first value is false, then it will return second value.