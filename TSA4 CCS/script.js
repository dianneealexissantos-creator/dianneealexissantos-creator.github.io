JAVASCRIPT: 
// Variables to store input and result 
let num1, num2, result; 
// Object to define calculator operations 
const calculator = { 
add: (a, b) => a + b, 
subtract: (a, b) => a - b, 
multiply: (a, b) => a * b, 
divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero!'
}; 
// Function to perform calculation 
function calculate(operation) { 
// Get values from input fields 
num1 = parseFloat(document.getElementById('num1').value); 
num2 = parseFloat(document.getElementById('num2').value); 
// Validate input 
if (isNaN(num1) || isNaN(num2)) { 
document.getElementById('result').textContent = "Please enter valid numbers!"; return; 
} 
// Perform selected operation 
result = calculator[operation](num1, num2); 
// Update webpage content dynamically 
document.getElementById('result').textContent = `Result: ${result}`; } 
// Example of an array (not required for the calculator logic, but for the requirement) const operations = ['add', 'subtract', 'multiply', 'divide']; 
console.log("Available operations:", operations);