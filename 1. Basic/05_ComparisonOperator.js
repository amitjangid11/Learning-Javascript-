console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(2 == 1);

console.log("2" <= 1);
console.log("02" >= 1);

// Note : The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >=0 is true and (1) null > 0 is false
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


// Example
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

// Strict check (===)
console.log("2" === 2); // false it will check w/o conversion

/*
1. Different datatype comparison shuold be avoided always focus on clean code.
*/