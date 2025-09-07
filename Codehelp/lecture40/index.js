/********************************************************************
 *  JAVASCRIPT VARIABLES & DATA TYPES
 *  ---------------------------------
 *  - JS is a Dynamically Typed Language
 *  - Variables can change type at runtime
 *  - Supports var, let, and const (different scope/behavior)
 ********************************************************************/


/********************************************************************
 *  1. Dynamically Typed Language
 *  - Type of variable is decided at runtime
 *  - Same variable can hold number, string, boolean, etc.
 ********************************************************************/
let dynamicVar = 25;       // number
console.log("1️⃣ dynamicVar as number:", dynamicVar);

dynamicVar = "Amit";       // string
console.log("1️⃣ dynamicVar as string:", dynamicVar);

dynamicVar = true;         // boolean
console.log("1️⃣ dynamicVar as boolean:", dynamicVar);



/********************************************************************
 *  2. var
 *  - Function scoped (not block scoped!)
 *  - Can be redeclared
 ********************************************************************/
function solve() {
    var age = 25; // only accessible inside this function
    console.log("2️⃣ var inside function:", age);
}
solve();

// var redeclaration allowed
var fullName = "Amit";
var fullName = "AmyGo";
console.log("2️⃣ Redeclared var fullName:", fullName);



/********************************************************************
 *  3. let
 *  - Block scoped (safer than var)
 *  - Can be reassigned but NOT redeclared in the same scope
 ********************************************************************/
let city = "Jaipur";
city = "Delhi"; // ✅ reassignment works
console.log("3️⃣ let reassignment city:", city);

{
    let city = "Mumbai"; // ✅ allowed in different block scope
    console.log("3️⃣ let inside block city:", city);
}

// let city = "Pune"; ❌ not allowed in same scope



/********************************************************************
 *  4. const
 *  - Block scoped
 *  - Cannot be reassigned or redeclared
 ********************************************************************/
const pi = 3.14;
console.log("4️⃣ const pi:", pi);
// pi = 22/7; ❌ Error: Assignment to constant variable.



/********************************************************************
 *  5. Variable Naming Conventions
 *  - Should start with letter, $, or _
 *  - camelCase is standard in JS
 *  - Avoid reserved words (let, var, const, etc.)
 ********************************************************************/
let myName = "Amit";     // ✅ good
let _privateVar = 123;   // ✅ valid
let $dollar = "USD";     // ✅ valid
// let 2number = 50; ❌ invalid



/********************************************************************
 *  6. Data Types in JS
 *  - Primitive: Number, String, Boolean, Undefined, Null, Symbol, BigInt
 *  - Non-Primitive: Objects, Arrays, Functions
 ********************************************************************/

// Number
let marks = 95;
console.log("6️⃣ Number marks:", marks);

// String
marks = "Amit";
console.log("6️⃣ String marks:", marks);

// Boolean
marks = true;
console.log("6️⃣ Boolean marks:", marks);

// Undefined
let subject;
console.log("6️⃣ Undefined subject:", subject);

// Null (intentional empty value)
let value = null;
console.log("6️⃣ Null value:", value);

// typeof checks
console.log("6️⃣ typeof null:", typeof value);      // "object" (quirk in JS!)
console.log("6️⃣ typeof subject:", typeof subject); // "undefined"
console.log("6️⃣ typeof marks:", typeof marks);     // "boolean" here

