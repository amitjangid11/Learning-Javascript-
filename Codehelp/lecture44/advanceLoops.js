/******************************************************
 * JAVASCRIPT : forEach, for-in, for-of Loops
 * Author : Amit Jangid (Practice File)
 ******************************************************/

/**
 * 👉 Why special loops?
 * - Normal loops (for, while, do-while) work on numbers.
 * - But in real life we often loop through arrays, objects, or strings.
 *   That’s why JS gives us `forEach`, `for-in`, `for-of`.
 */


/***********************
 * forEach LOOP (Array only)
 ***********************/

/**
 * 👉 Definition:
 * - A higher-order function for arrays.
 * - Executes a function for each element in array.
 * - Gives access to `value`, `index`, and the `whole array`.
 */

console.log("\n========= forEach LOOP =========");

let arr = [10, 20, 30, 40, 50];
console.log("Length of arr:", arr.length);

arr.forEach((value, index, array) => {
    console.log("Value:", value, "| Index:", index, "| Full Array:", array);
});

// Mini problem: Print squares of array elements
arr.forEach((num) => {
    console.log(`Square of ${num} = ${num * num}`);
});



/***********************
 * for-in LOOP (Objects)
 ***********************/

/**
 * 👉 Definition:
 * - Iterates over the keys of an object.
 * - Works well for objects, but can also be used on arrays (not recommended).
 */

console.log("\n========= for-in LOOP =========");

let obj = {
    name: "Amit",
    age: 22,
    weight: 64,
    height: "5ft 8inch",
    greet: function () {
        console.log("Hello World!!");
    }
};

// Loop through keys
for (let key in obj) {
    console.log(`Key = ${key}, Value = ${obj[key]}`);
}



// Mini problem: Count number of properties in an object
let countProps = 0;
for (let key in obj) {
    countProps++;
}
console.log("Number of properties in obj:", countProps);



/***********************
 * for-of LOOP (Iterables)
 ***********************/

/**
 * 👉 Definition:
 * - Iterates over values of *iterables* (Array, String, Map, Set, etc.).
 * - Simpler than forEach when you only care about values.
 */

console.log("\n========= for-of LOOP =========");

// Example-1: Array
for (let value of arr) {
    console.log("Array Value:", value);
}

// Example-2: String
let myString = "Amit";
for (let char of myString) {
    console.log("Character:", char);
}

// Example-3: Using with Set (unique values)
let mySet = new Set([1, 2, 2, 3, 4, 4, 5]);
for (let value of mySet) {
    console.log("Set Value:", value);
}



// Mini Problem: Sum of array using for-of
let numbers = [5, 10, 15, 20];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum of numbers:", sum);



/***********************
 * Quick Comparison
 ***********************/

/**
 * forEach → Arrays only, access value + index.
 * for-in  → Objects (keys), can be used on arrays (not preferred).
 * for-of  → Any iterable (Array, String, Map, Set).
 */
