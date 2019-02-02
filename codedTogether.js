//
// Make sure you copy/paste this code in a jsbin.com page to get it to work properly! Don't be afraid to experiment with new things 🙂
//

// This line represents a comment (this will not be executed)

// Statement: A line of code that gets executed to do something
// A statement to print the String "Hello World"
console.log('Hello World!');

// Variables (Declared & assigned a value to)
let elleHacks = 'This Hackathon is AWESOME! 🔥';

// Expression: A line of code that evaluates values for us
// The (3 + 8) part is an expression that evaluates to 11 before the rest of the statement gets executed!
let sumOfTwoNumbers = 3 + 8;

// Reading user input from the screen
let firstName = prompt('Please enter your first name'); // "prompt" shows the message we pass it to the user then reads their input as a String

let lastName = prompt('Please enter your last name');

// Create the full name
let fullName = firstName + ' ' + lastName;

// Output the full name to the user
alert('Hello, ' + fullName); // "alert"

// Loops
// 3 sections of a for loop:
// - initializing the counter
// - evaluation expression
// - end of loop statement
for (let num = 0; num < 11; num = num + 2) {
  console.log(num);
}

// Conditional Statements
for (let num = 0; num < 11; num = num + 1) {
  // if (some expression that evaluates to true/false)
  if (num % 2 === 0) {
    // % is the modulo operator (get the remainder of dividing 2 numbers)
    // === is the equality check operator (evaluates to true/false based on the equality of values/variables on its left & right)
    console.log(num);
  }
}
