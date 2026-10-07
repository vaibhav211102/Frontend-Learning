// Date in JavaScript

// const currentDate = new Date();
// console.log("Current Date and Time: " + currentDate);

// const specificDate = new Date("2024-06-15T10:30:00");
// console.log("Specific Date and Time: " + specificDate);

// const currentDate = new Date();
// console.log("Current Date and Time: " + currentDate);

// console.log(currentDate.toString()); // Full date and time
// console.log(currentDate.toDateString()); // Date only
// console.log(currentDate.toTimeString());    // Time only

// console.log(currentDate.toISOString()); // ISO format

// console.log(currentDate.getFullYear()); // Year
// console.log(currentDate.getMonth());
// console.log(currentDate.getDate()); // Day of the month
// console.log(currentDate.getDay()); // Day of the week (0-6, where 0 is Sunday)
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());


// The Date constructor can also accept year, month, day, hour, minute, second values.
// In JavaScript, the month is zero-based: 0 = January, 5 = June.
// So this creates: June 15, 2026 at 10:30:00 in local time.
// year month day hour minute second millisecond
// const now = new Date(2026, 5, 15, 10, 30, 0, 0); // June 15, 2026 at 10:30:00 in local time
// console.log("Current Date and Time: " + now); // Prints the full date and time in the browser's local time zone.

// const now = Date.now(); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
// console.log("Milliseconds since January 1, 1970: " + now);

// const dates = new Date(now); // Create a new Date object using the milliseconds

// const dates = new Date(0); // Create a new Date object representing January 1, 1970, 00:00:00 UTC

// const dates = new Date(-79852320000); // Create a new Date object representing a date before January 1, 1970

// console.log("Current Date and Time: " + dates.toString()); // Prints the full date and time in the browser's local time zone.