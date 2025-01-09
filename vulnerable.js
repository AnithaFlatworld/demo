// vulnerable.js
// This file demonstrates multiple common vulnerabilities in JavaScript.

// 1. Insecure use of eval function (eval injection)
function executeUserInput(input) {
    // Warning: Using eval to execute user input is dangerous and insecure!
    eval(input); // Vulnerable to injection attacks
}

// Example usage of eval with user input
const userInput = "console.log('This is unsafe!');";
executeUserInput(userInput);


// 2. SQL Injection vulnerability
const user = "admin";
const password = "1234";
const query = `SELECT * FROM users WHERE username = '${user}' AND password = '${password}'`; // SQL Injection

// 3. Cross-Site Scripting (XSS) vulnerability
function showAlert(input) {
    document.body.innerHTML = input; // Possible XSS vulnerability if input contains malicious code
}
showAlert('<img src="x" onerror="alert(1)">'); // This is a typical XSS attack

// 4. Storing sensitive data in plaintext
const fs = require('fs');
fs.writeFileSync('passwords.txt', 'mySuperSecretPassword123'); // Storing passwords in plain text, vulnerable to leaks
