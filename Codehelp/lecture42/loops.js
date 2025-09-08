/********************************************************************
 * LOOPS IN JAVASCRIPT
 * -------------------
 * 1) for loop
 * 2) while loop
 * 3) do-while loop
 * 4) for...of loop (used with arrays/iterables)
 * 5) for...in loop (used with objects)
 ********************************************************************/


/********************************************************************
 * 1. FOR LOOP
 ********************************************************************/
console.log("******* For Loop ********");

// Example 1: Counting 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// Example 2: Reverse Looping 
for (let i = 5; i > 0; i--) {
    console.log("Reverse:", i);
}

// Example 3: Using 'break' keyword (stop when i = 5)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Loop stopped at:", i);
        break;
    }
    console.log(i);
}

// Example 4: Using 'continue' keyword (skip i = 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipped:", i);
        continue;
    }
    console.log("Value:", i);
}


/********************************************************************
 * 2. WHILE LOOP
 ********************************************************************/
console.log("\n******* While Loop ********");

// Example 1: Print numbers 1–5
let i = 1;
while (i <= 5) {
    console.log("While:", i);
    i++;
}

// Example 2: Using 'break' keyword (stop at 3)
let j = 1;
while (j <= 5) {
    if (j === 3) {
        console.log("Stopped at:", j);
        break;
    }
    console.log("While Break:", j);
    j++;
}

// Example 3: Using 'continue' keyword (skip 3)
let k = 0;
while (k < 5) {
    k++;  // increment first to avoid infinite loop
    if (k === 3) {
        console.log("Skipped:", k);
        continue;
    }
    console.log("While Continue:", k);
}


/********************************************************************
 * 3. DO-WHILE LOOP
 ********************************************************************/
console.log("\n******** do-while Loop **********");

// Example 1: Always runs at least once
let l = 1;
do {
    console.log("Do-While:", l);
    l++;
} while (l <= 5);

// Example 2: Condition false initially, still executes once
let m = 10;
do {
    console.log("This runs at least once even if condition false, m =", m);
    m++;
} while (m <= 5);


/********************************************************************
 * 4. FOR...OF LOOP (best for Arrays/Strings)
 ********************************************************************/
console.log("\n******** for...of Loop **********");

// Example 1: Array
let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

// Example 2: String
let word = "JS";
for (let char of word) {
    console.log("Char:", char);
}


/********************************************************************
 * 5. FOR...IN LOOP (best for Objects)
 ********************************************************************/
console.log("\n******** for...in Loop **********");

let student = {
    name: "Amit",
    age: 22,
    grade: "A"
};

for (let key in student) {
    console.log(`${key} → ${student[key]}`);
}
