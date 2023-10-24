/*
    Your javascript console can be so much more useful than you think
    Say goodbye to countless console.log() and consider using these other useful functions
*/

// Basic console logs (boring)
console.log("This is a regular console log!");
console.log("This introduces a lot of clutter");

// Warnings and errors
console.warn("This is a warning");
console.error("This is an error");

// Check how much time a piece of code took to run
console.time("Loop timer");
let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i;
}
console.timeEnd("Loop timer");

// Trace how a function was called
function firstFunction() {
  console.trace();
}

function randomFunction() {
  firstFunction();
}

// Group console.log() messages so they don't clutter the console

console.group("This is a message group");
console.log("This is in a group (1)");
console.log("This is in a group (2)");
console.log("This is in a group (3)");
console.log("This is in a group (4)");
console.groupEnd();

tableDemo();

function tableDemo() {
  // Visualize objects better
  // Very useful for the todo app, or using any other apis that return objects
  // A lot of them do!

  let object1 = { name: "Vinay", major: "Computer Science", class: "2024" };
  let object2 = { name: "Lucas", major: "Psychology", class: "2024" };
  let object3 = { name: "Alex", major: "Chemistry", class: "2024" };

  // This is very messy and clutters the console
  console.log(object1);

  // Make an array of all our objects
  let tableArray = [object1, object2, object3];

  // Now use a table! (first parameter is an array)
  console.table(tableArray);
  // You can also choose which columns to show by adding the column attribute!
  let columnsToShow = ["name"];
  console.table(tableArray, columnsToShow);
}
