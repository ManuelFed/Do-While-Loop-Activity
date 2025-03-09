// Name: Manuel Federico D. Tudayan
// Activity: Perf2: Conditional Statements and Loops
// Data Structures and Algorithms

// DO-WHILE LOOP ACTIVITY:

// Set the correct password for the user to enter.
let password = "correctPassword";
// Ask the user for a password.
let user_password = prompt("Enter your password: ");

// Do-While Loop
// Runs amd asks the user for a password until the correct password is entered.
do {
  // If user inputs wrong password, display "Incorrect, try again." and ask again.
  user_password = prompt("Enter your password: ");
  console.log("Incorrect, try again.");
} while (user_password != password);

// If user inputs correct password, display "Access granted."
console.log("Access granted.");
