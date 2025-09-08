/******************************************************
 * LOOPS IN JAVASCRIPT
 * Author : Amit Jangid (Practice File)
 ******************************************************/

console.log("\n========= LOOP BASICS =========");

// 1. For Loop
console.log("***** For Loop (1 to 5) *****");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Reverse Loop
console.log("***** For Loop (Reverse 5 to 1) *****");
for (let i = 5; i > 0; i--) {
    console.log(i);
}

// 3. While Loop
console.log("***** While Loop *****");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 4. Do-While Loop
console.log("***** Do-While Loop *****");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// 5. For..of (works on iterables like arrays, strings)
console.log("***** For..of Loop *****");
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 6. For..in (works on object properties)
console.log("***** For..in Loop *****");
let student = { name: "Amit", age: 22, course: "CS" };
for (let key in student) {
    console.log(key, ":", student[key]);
}

// 7. Using break & continue
console.log("***** Break & Continue *****");
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        console.log("Breaking at", k);
        break;
    }
    console.log(k);
}

for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        console.log("Skipping", k);
        continue;
    }
    console.log(k);
}


/******************************************************
 * REAL-LIFE LOOP PROBLEMS
 ******************************************************/

console.log("\n========= REAL-LIFE LOOP PROBLEMS =========");

// 1. Sum of numbers 1 to N
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum 1 to 10:", sumToN(10));

// 2. Factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 5:", factorial(5));

// 3. Print multiplication table
function multiplicationTable(n) {
    console.log(`Multiplication Table of ${n}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
multiplicationTable(7);

// 4. Reverse a string using loop
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reverse of 'Amit':", reverseString("Amit"));

// 5. Count even & odd numbers in an array
function countEvenOdd(arr) {
    let even = 0, odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) even++;
        else odd++;
    }
    return { even, odd };
}
console.log("Even & Odd count:", countEvenOdd([1, 2, 3, 4, 5, 6, 7]));

// 6. Find the largest number in an array
function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}
console.log("Max in [10, 25, 3, 99, 42]:", findMax([10, 25, 3, 99, 42]));

// 7. Check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Is 7 prime?", isPrime(7));
console.log("Is 12 prime?", isPrime(12));
