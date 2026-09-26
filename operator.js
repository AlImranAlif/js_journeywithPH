//Arithmetic Operators { +, -, *, /, % }
// Assignment Operators { =, +=, -=, *=, /=, %= }
//comparison Operators { ==, ===, !=, !==, >, <, >=, <= }
// Logical Operators { &&, ||, ! }
const a = 3;
const b = 10;
const sum = a + b;
console.log(`The sum of ${a} and ${b} is ${sum}.`);

const division = b / a;
console.log(`The division of ${b} by ${a} is ${division}.`);
console.log(`The division of ${b} by ${a} is ${(division.toFixed(2))}.`);

const remainder = b % a;
console.log(`The remainder of ${b} divided by ${a} is ${remainder}.`);

// a + b -(a * b) / (a % b) -b

const complexOperation = a + b - (a * b) / (a % b) - b;
console.log(`The result of the complex operation is ${complexOperation}.`);

//sum = sum + 5;(sum += 5)

const c =a>b;
console.log(`Is ${a} greater than ${b}? ${c}.`);

const d =a===b;
console.log(`Is ${a} equal to ${b}? ${d}.`);


const e = a!==b;
console.log(`Is ${a} not equal to ${b}? ${e}.`);
