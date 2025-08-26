/*
const cars = [0,1,2,3,4,5,6,7,8,9];
console.log(cars);

const myHeros = ["Superman","Batman","Ironman"];

const myArr = new Array(1,2,3,4,5);
console.log(myArr[0]);

// Array Methods
//---
myArr.push(6); // add 6 at last
myArr.push(7); // add 7 at last
myArr.pop(); // remove last value
myArr.unshift(9); // adds element at starting
myArr.shift(); // remove any element added at start using unshift()

console.log(myArr.includes(9)); // is 9 included in myArr[]
console.log(myArr.indexOf(1)); // prints index of passed element in the indexof() method
console.log(myArr);
//---

const newArr = myArr.join();
console.log(myArr);
console.log(newArr); //it is typed changed to string
console.log(typeof(newArr)); //it is typed changed to string


// slice , splice

console.log("A ",myArr);

const newArr1 = myArr.slice(1,3);
console.log(newArr1);
console.log("B ",myArr);

const newArr2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(newArr2);
*/

// Arrays part-2

const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

//marvelHeros.push(dcHeros);
//console.log(marvelHeros[3][1]); // Flash


// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);


const allNewHeros = [...marvelHeros, ...dcHeros]; //spread operator
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity);
console.log(realAnotherArr);



// Getting or fectching data and want to convert into js
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Hitesh" }));


let score1 = 100;
let score2 = 100;
let score3 = 100;


console.log(Array.of(score1, score2, score3));