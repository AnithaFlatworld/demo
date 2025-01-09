// vulnerable.js
// This file demonstrates an insecure use of the `eval` function.
function executeUserInput(input) {
    // Warning: Using eval to execute user input is dangerous and insecure!
    eval(input); // Vulnerable to injection attacks
}
// Example usage
const userInput = "console.log('This is unsafe!');";
executeUserInput(userInput);
