/*
// Example-1
let score = "33ab"; // "33" , true , undefined

console.log(typeof score); // String
console.log(typeof(score)); // String

let valueInNumber = Number(score); // conversion
console.log(typeof valueInNumber); // Number

console.log(valueInNumber); // NaN


// Example-2

let score1 = "33ab"; // "33"

console.log(typeof score1); // String
console.log(typeof(score1)); // String

let valueInNumber1 = Number(score1); // conversion
console.log(typeof valueInNumber1); // Number

console.log(valueInNumber1); // NaN


// Example-3

let isloggedIn = 1; 
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn); // 1 -> true / 0 -> false / "Amit" -> true


// example-4

 let someNumber = 10;
 let convertedToString = String(someNumber);
 console.log(convertedToString);
 console.log(typeof convertedToString)

*/

// *****************  Operations  ****************

let value = 3;
let negValue = -value;

// console.log(negValue) 
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello";
let str2 = " Amit";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");



// Always write readable code
console.log(3 + 4 * 5 % 3); // No
console.log((3 + ((4 * 5) % 3))); // yes

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // not recommended

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);