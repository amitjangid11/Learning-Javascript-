/******************************************************
 * JAVASCRIPT : OBJECTS & ARRAYS
 * Author : Amit Jangid (Practice File)
 ******************************************************/

/***********************
 * OBJECTS IN JAVASCRIPT
 ***********************/

/**
 * 👉 Definition:
 * An object is a collection of key-value pairs.
 * Keys are called "properties" and values can be any type:
 * string, number, array, function, another object, etc.
 */

console.log("\n========= OBJECT BASICS =========");

let obj = {
    name: "Amit",
    age: 22,
    weight: 64,
    height: "5ft 8inch",
    greet: function () {
        console.log("Hello World!!");
    }
};

console.log("Object:", obj);
obj.greet();
console.log("Type of obj:", typeof obj); // "object"


// Shallow vs Deep Copy
console.log("\n========= SHALLOW vs DEEP COPY =========");

let obj1 = obj; // SHALLOW COPY -> points to the same memory
obj1.name = "Changed Name";
console.log("Original Object (after shallow copy change):", obj);

let obj2 = { ...obj }; // DEEP COPY using spread operator
obj2.name = "AmyGo";
console.log("Deep Copy Object:", obj2);
console.log("Original Object (unchanged):", obj);


// Object.keys(), Object.values(), Object.entries()
console.log("\n========= Object Utility Methods =========");
console.log("Keys:", Object.keys(obj));
console.log("Values:", Object.values(obj));
console.log("Entries:", Object.entries(obj));



/***********************
 * ARRAYS IN JAVASCRIPT
 ***********************/

/**
 * 👉 Definition:
 * Array is a special object used to store multiple values
 * in an ordered collection (index-based).
 */

console.log("\n========= ARRAY BASICS =========");

// 1. Array Literal
let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);
console.log("First element:", arr[0]);

// 2. Array Constructor
let brr = new Array("Amit", 21, true);
console.log("Array (constructor):", brr);

// Check type
console.log("typeof arr:", typeof arr); // object
console.log("Is Array?", Array.isArray(arr)); // true



/***********************
 * ARRAY OPERATIONS
 ***********************/

console.log("\n========= ARRAY OPERATIONS =========");

let arr1 = [1, 2, 3, 4, 5];

// Insert/Remove
arr1.push(6);        // add at end
arr1.pop();          // remove last
arr1.unshift(0);     // add at beginning
arr1.shift();        // remove from beginning
console.log("After push/pop/unshift/shift:", arr1);

// Slice & Splice
let sliced = arr1.slice(1, 3); // copy elements [1,2]
console.log("Sliced (1,3):", sliced);

arr1.splice(2, 1, "Inserted"); // at index=2, remove 1 element & add "Inserted"
console.log("After Splice:", arr1);


/***********************
 * HIGHER ORDER METHODS
 ***********************/

console.log("\n========= ARRAY METHODS =========");

// map()
let arr2 = [10, 20, 30];
let squared = arr2.map(num => num * num);
console.log("Squared numbers:", squared);

// filter()
let arr3 = [1, 2, 3, 4, 5, 6];
let evens = arr3.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// filter string type values
let arr4 = [1, "Ami", null, "Modi"];
let stringsOnly = arr4.filter(value => typeof value === "string");
console.log("Strings only:", stringsOnly);

// reduce()
let arr5 = [1, 2, 3, 4, 5];
let sum = arr5.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum);

// sort()
let arr6 = [10, 8, 9, 4, 5, 6, 1, 2, 7, 3];
let asc = [...arr6].sort((a, b) => a - b); // ascending
let desc = [...arr6].sort((a, b) => b - a); // descending
console.log("Ascending sort:", asc);
console.log("Descending sort:", desc);


/***********************
 * REAL-LIFE MINI PROBLEMS
 ***********************/

console.log("\n========= REAL-LIFE MINI PROBLEMS =========");

// 1. Find max in array
function findMax(arr) {
    return arr.reduce((max, curr) => curr > max ? curr : max, arr[0]);
}
console.log("Max in [1, 5, 2, 10, 7]:", findMax([1, 5, 2, 10, 7]));

// 2. Count frequency of elements
function countFrequency(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
console.log("Frequency count:", countFrequency(["a", "b", "a", "c", "b", "a"]));

// 3. Merge two arrays & remove duplicates
let arr7 = [1, 2, 3];
let arr8 = [3, 4, 5];
let mergedUnique = [...new Set([...arr7, ...arr8])];
console.log("Merged unique array:", mergedUnique);

// 4. Check if array contains a value
let hasValue = arr7.includes(2);
console.log("Does arr7 include 2?", hasValue);

// 5. Flatten nested arrays
let nestedArr = [1, [2, [3, 4]], 5];
let flatArr = nestedArr.flat(2); // depth=2
console.log("Flattened array:", flatArr);

