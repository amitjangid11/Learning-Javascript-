/**************************************************
 * PART 1: Creating Arrays
 **************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

const myHeros = ["Superman", "Batman", "Ironman"];

const myArr = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]); // accessing first element


/**************************************************
 * PART 2: Array Methods (Adding & Removing Elements)
 **************************************************/
myArr.push(6);   // Add element at the end → [1,2,3,4,5,6]
myArr.push(7);   // → [1,2,3,4,5,6,7]
myArr.pop();     // Remove last element → [1,2,3,4,5,6]

myArr.unshift(9); // Add element at the start → [9,1,2,3,4,5,6]
myArr.shift();    // Remove first element → [1,2,3,4,5,6]

console.log(myArr.includes(9)); // false (9 was removed)
console.log(myArr.indexOf(1));  // 0 (since 1 is at index 0)

console.log("After push/pop/unshift/shift:", myArr);


/**************************************************
 * PART 3: Converting Array to String
 **************************************************/
const newArr = myArr.join(); // join turns array into string "1,2,3,4,5,6"
console.log("Joined Array:", newArr);
console.log("Type of joined array:", typeof newArr);


/**************************************************
 * PART 4: Slice vs Splice
 **************************************************/
console.log("Original Array A:", myArr);

// slice → copy part (does not change original)
const sliced = myArr.slice(1, 3);
console.log("Sliced (1,3):", sliced);
console.log("After Slice (Array B):", myArr);

// splice → remove part (changes original)
const spliced = myArr.splice(1, 3);
console.log("After Splice (Array C):", myArr);
console.log("Removed by Splice:", spliced);


/**************************************************
 * PART 5: Combining Arrays
 **************************************************/
const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// Wrong way (nested array)
// marvelHeros.push(dcHeros);
// console.log(marvelHeros[3][1]); // Access "Flash"

// concat method
const allHeros1 = marvelHeros.concat(dcHeros);
console.log("Concat:", allHeros1);

// spread operator (cleaner way)
const allHeros2 = [...marvelHeros, ...dcHeros];
console.log("Spread Operator:", allHeros2);


/**************************************************
 * PART 6: Flattening Nested Arrays
 **************************************************/
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// flat(Infinity) → removes all nested arrays
const flatArr = anotherArr.flat(Infinity);
console.log("Flattened Array:", flatArr);


/**************************************************
 * PART 7: Converting to Arrays
 **************************************************/
console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh"));   // ['H','i','t','e','s','h']

// When passing object → Array.from() needs iterable, so this gives []
console.log(Array.from({ name: "Hitesh" })); // []


// Array.of() → makes an array from given values
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100,200,300]
