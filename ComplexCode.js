/*
Filename: ComplexCode.js
Content: A complex JavaScript code with multiple functionalities
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to get the factorial of a number
function factorial(num) {
  if (num === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to calculate the Fibonacci sequence
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const john = new Person("John Doe", 25);
john.greet();

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering prime numbers from the array
const primes = numbers.filter((num) => isPrime(num));
console.log(primes);

// Calculating the factorial of each number in the array
const factorials = numbers.map((num) => factorial(num));
console.log(factorials);

// Reversing a string
const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr);

// Printing the Fibonacci sequence up to a given number
const n = 10;
const fibSequence = fibonacci(n);
console.log(fibSequence);

// Exporting the functions and classes
module.exports = {
  isPrime,
  factorial,
  reverseString,
  fibonacci,
  Person,
};