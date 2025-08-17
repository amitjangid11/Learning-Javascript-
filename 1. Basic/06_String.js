const name = "Amit";
const gender = " Male";
console.log(name + gender + " how are you?"); // Old Syntax

console.log(`Hello dear, my name is ${name},I'm ${gender} and I'm happy to work in your compnay as Junior engineer`);


// String Declaration -Another Way

const gameName = new String('Amit-Jangid-padva');
console.log(gameName);
console.log(gameName[0]);//A
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0, 4);
console.log(newString);

const newString1 = gameName.slice(-8, 6);
console.log(newString1);

const newString2 = "   hitesh     ";
console.log(newString2);
console.log(newString2.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar')); //false

console.log(gameName.split('-'))