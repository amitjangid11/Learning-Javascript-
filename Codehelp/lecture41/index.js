/********************************************************************
 *  OPERATORS IN JAVASCRIPT (COMPLETE HANDBOOK)
 *  --------------------------------------------
 *  Types:
 *   1) Arithmetic
 *   2) Unary
 *   3) Assignment
 *   4) Comparison
 *   5) Logical
 *   6) Ternary (Conditional)
 *   7) Bitwise
 ********************************************************************/


/********************************************************************
 * 1. Arithmetic Operators
 *    +, -, *, /, %, **
 ********************************************************************/
let a = 5;
let b = 2;

console.log("***** 1️⃣ Arithmetic Operators *****");
console.log("a + b =", a + b);  // 7
console.log("a - b =", a - b);  // 3
console.log("a * b =", a * b);  // 10
console.log("a / b =", a / b);  // 2.5
console.log("a % b =", a % b);  // 1 (remainder)
console.log("a ** b =", a ** b); // 25 (5^2)


/********************************************************************
 * 2. Unary Operators
 *    ++ (increment), -- (decrement)
 ********************************************************************/
let x = 10;
console.log("***** 2️⃣ Unary Operators *****");
console.log("x++ (post-increment) =", x++); // prints 10, then x=11
console.log("++x (pre-increment) =", ++x); // x=12, prints 12
console.log("x-- (post-decrement) =", x--); // prints 12, then x=11
console.log("--x (pre-decrement) =", --x); // x=10, prints 10


/********************************************************************
 * 3. Assignment Operators
 *    =, +=, -=, *=, /=, %=
 ********************************************************************/
console.log("***** 3️⃣ Assignment Operators *****");
let y = 5;
y = y + 10;   // 15
y += 10;      // 25
y -= 5;       // 20
y *= 2;       // 40
y /= 4;       // 10
y %= 3;       // 1
console.log("Final value of y:", y);


/********************************************************************
 * 4. Comparison Operators
 *    == vs ===, != vs !==, >, <, >=, <=
 ********************************************************************/
console.log("***** 4️⃣ Comparison Operators *****");

// Equality
console.log("5 == '5' :", (5 == '5'));   // true (checks value only)
console.log("5 === '5' :", (5 === '5')); // false (checks value + type)

// Inequality
console.log("5 != '5' :", (5 != '5'));   // false
console.log("5 !== '5' :", (5 !== '5')); // true

// Greater / Less
console.log("7 > 3 :", (7 > 3));    // true
console.log("7 < 3 :", (7 < 3));    // false
console.log("7 >= 7 :", (7 >= 7));  // true
console.log("7 <= 6 :", (7 <= 6));  // false


/********************************************************************
 * 5. Logical Operators
 *    && (AND), || (OR), ! (NOT)
 *    - falsy: false, 0, '', null, undefined, NaN
 *    - truthy: everything else
 *    - short-circuiting: evaluation stops when result is decided
 ********************************************************************/
console.log("***** 5️⃣ Logical Operators *****");
console.log("false || 1 || 2 || 3 =", false || 1 || 2 || 3); // 1
console.log("false || 'Amit' =", false || "Amit");           // "Amit"
console.log("true && 'Hello' =", true && "Hello");           // "Hello"
console.log("false && 'World' =", false && "World");         // false
console.log("!true =", !true);                               // false


/********************************************************************
 * 6. Ternary Operator (Conditional)
 *    condition ? exprIfTrue : exprIfFalse
 ********************************************************************/
console.log("***** 6️⃣ Ternary Operator *****");
let agee = 25;
let status = (agee > 18) ? "I can vote ✅" : "I can't vote ❌";
console.log("Age:", agee, "=>", status);

let temp = 15;
let weather = (temp > 30) ? "Hot ☀️" : "Cool 🌤️";
console.log("Temperature:", temp, "=>", weather);


/********************************************************************
 * 7. Bitwise Operators
 *    Works on 32-bit binary representation of numbers
 *    & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)
 ********************************************************************/
console.log("***** 7️⃣ Bitwise Operators *****");

let p = 5;   // binary: 0101
let q = 3;   // binary: 0011

console.log("p & q =", p & q);   // 1  (0101 & 0011 = 0001)
console.log("p | q =", p | q);   // 7  (0101 | 0011 = 0111)
console.log("p ^ q =", p ^ q);   // 6  (0101 ^ 0011 = 0110)
console.log("~p =", ~p);         // -6 (bitwise NOT: invert all bits)

console.log("p << 1 =", p << 1); // 10 (0101 << 1 = 1010) 
console.log("p >> 1 =", p >> 1); // 2  (0101 >> 1 = 0010)
 // observation : when left shift 5 it multiply by 2 and in case of right shift it divide by 2
