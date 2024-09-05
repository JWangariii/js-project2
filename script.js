// String Manipulation Functions:
let string = "you're welcome!";

// Reverse a String: Write a function that reverses a given string.

function reverseString(greet) {
  return greet.split("").reverse().join("");
}
let newString = reverseString(string);
console.log(newString);

// Count Characters: Create a function that counts the number of characters in a string.
function count(greet) {
  return greet.length;
}
let length = count(string);
console.log(length);

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capital(greet) {
  return greet.replace(/b\w/, function (ola) {
    return ola.toUppercase();
  });
}
let capitalString = capital(string);
console.log(capitalString);

// Array Functions
let myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function maximum(arr) {
  return Math.max(...arr);
}
function minimum(arr) {
  return Math.min(...arr);
}
let maxValue = maximum(myArray);
let minValue = minimum(myArray);
console.log(`Max: ${maxValue}, Min: ${minValue}`);

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
let arraySum = sum(myArray);
console.log(arraySum);

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filter(arr, condition) {
  return arr.filter(condition);
}
let filteredArray = filter(myArray, (x) => x % 2 === 0);
console.log(filteredArray);

// Mathematical Functions:
let num = 8;
// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let fact = factorial(num);
console.log(fact);

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let primeCheck = isPrime(num);
console.log(primeCheck);

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function fibonacciSequence(n) {
  let sequence = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    let temp = a;
    a = b;
    b = temp + b;
  }
  return sequence;
}
let terms = 10;
let fibSequence = fibonacciSequence(terms);
console.log(fibSequence);
