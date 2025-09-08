/********************************************************************
 * STRINGS IN JAVASCRIPT
 * ---------------------
 * Strings are sequences of characters used to represent text.
 * They can be created in 2 main ways:
 *   1. String literal (preferred) → let str = "Hello"
 *   2. String object (rarely used) → let str = new String("Hello")
 ********************************************************************/

// 1. String Literal
let firstName = "Amit";
let lastName = "Jangid";

// Template literals (backticks ``) → allow multiline + interpolation
let fullName = `Amit 
Jangid
GIT
302022`;
console.log("Template Literal Example:", fullName);

// 2. String Object
let myName = new String("Amit Jangid");  
console.log("String Object Example:", myName); 
/* Note:
   In many IDEs, variable name `name` shows a strike warning 
   because `window.name` is a reserved property in browsers.
   Better to avoid using 'name' as a variable identifier. 
*/


/********************************************************************
 * COMMON STRING OPERATIONS
 ********************************************************************/

console.log("\n******** String Operations ********");

// 1. Concatenation
let opt1 = "English";
let opt2 = "Hindi";

// Traditional concatenation using +
let ans1 = opt1 + " " + opt2;
console.log("Concatenation (+):", ans1);

// Modern way: Template literals
let ans2 = `${opt1} ${opt2}`;
console.log("Concatenation (Template Literal):", ans2);


// 2. Length
console.log("Length of opt2:", opt2.length); // 5


// 3. Uppercase / Lowercase
console.log("Uppercase:", opt2.toUpperCase()); // HINDI
console.log("Lowercase:", opt1.toLowerCase()); // english


// 4. substring(start, end) → end index not included
let text = "JavaScript";
console.log("Substring(0,4):", text.substring(0, 4)); // Java
console.log("Substring(0,4):", text.substring(4)); // Java

// 5. slice(start, end) → can accept negative indexes
console.log("Slice(4,10):", text.slice(4, 10)); // Script
console.log("Slice(-6):", text.slice(-6)); // Script (last 6 chars)


// 6. trim() → removes spaces from start and end
let messy = "   Amit   ";
console.log("Trim:", messy.trim()); // "Amit"


// 7. replace() → replaces first match
let sentence = "I like Java. Java is powerful.";
console.log("Replace Java with JS:", sentence.replace("Java", "JS"));

// 8. replaceAll() → replaces all matches
console.log("ReplaceAll Java with JS:", sentence.replaceAll("Java", "JS"));


// 9. includes() → checks substring presence
console.log("Includes 'Script'?", text.includes("Script")); // true


// 10. charAt() → character at index
console.log("CharAt(2):", text.charAt(2)); // v

// 11. indexOf() and lastIndexOf()
console.log("IndexOf('a'):", text.indexOf("a"));       // 1
console.log("LastIndexOf('a'):", text.lastIndexOf("a")); // 3


// 12. split() → converts string to array
let langs = "JS,Python,Java,C++";
console.log("Split by comma:", langs.split(",")); // [ 'JS', 'Python', 'Java', 'C++' ]


// 13. repeat() → repeats string
let laugh = "Ha";
console.log("Repeat 3 times:", laugh.repeat(3)); // HaHaHa


// 14. startsWith() & endsWith()
console.log("Starts with 'Java'?", text.startsWith("Java")); // true
console.log("Ends with 'Script'?", text.endsWith("Script")); // true


/*
#Quick Notes
>> ✅ Use string literals (" ", ' ', ` `) instead of new String() (simpler + faster).

>> ✅ Template literals allow multiline and ${variable} interpolation.

>> ✅ Important methods: .length, .toUpperCase(), .substring(), .slice(), .trim(), .replace(), .split().
*/