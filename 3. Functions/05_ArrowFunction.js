// function Defination
function sayMyName() {
    console.log("Love Babbar");
}

// Function Use - function Call
// sayMyName();

function printCounting() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
// Function calling
// printCounting();

function printNumber(num) { // num -> parameter
    console.log("Prinitng Number : ", num);
}

// printNumber(5); // 5 -> Argument

function getAverage(num1, num2) {
    let average = (num1 + num2) / 2;
    console.log("Average : ", average);
}

// getAverage(5,14);


/* # FUNCTION THAT RETURN VALUE - Return Function */

function getSome(a, b, c) {
    let sum = a + b + c;
    return sum;
}

// let returnedValue = getSome(1, 2, 3);
// console.log(returnedValue);


function getName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

// let fullName = getName("Amit","Jangid");
//  let fullName = getName(100,"Jangid");
let fullName = getName("Amit", 7014);
// console.log("FullName : ",fullName);



/******* #Functions Expression*******/

// Example-1
let getMultipliaction = function (num1, num2) {
    return num1 * num2;
}

// let ans = getMultipliaction(10,10);
// console.log(ans);

// Example-2

let squareNumber = function (num) {
    return num ** 2;
}

console.log("Square : ", squareNumber(10));




/************* #Arrow Function *************/

//Example-1

let getExponent = (x, y) => {
    let ans = x ** y;
    return x ** y;
}

console.log("Exponent : ",getExponent(2, 10));