/********************************************************************
 * CONTROL FLOW IN JAVASCRIPT
 * --------------------------
 * 1) if-else
 * 2) if-else-if ladder
 * 3) Nested if
 * 4) switch-case
 * 5) ternary operator
 ********************************************************************/


/********************************************************************
 * 1. IF - ELSE
 ********************************************************************/
let age = 10;
console.log("***** 1️⃣ if-else *****");
if (age > 18) {
   console.log(`✅ You can vote`);
} else {
   console.log(`❌ Sorry, you cannot vote`);
}

// Example: Check even/odd
let num1 = 7;
if (num1 % 2 === 0) {
   console.log(`${num1} is Even`);
} else {
   console.log(`${num1} is Odd`);
}


/********************************************************************
 * 2. IF - ELSE IF - ELSE LADDER
 ********************************************************************/
console.log("\n***** 2️⃣ if-else-if ladder *****");

// Example: grading system
let score = 72;

if (score >= 90) {
   console.log("Grade: A+");
} else if (score >= 75) {
   console.log("Grade: A");
} else if (score >= 60) {
   console.log("Grade: B");
} else if (score >= 40) {
   console.log("Grade: C");
} else {
   console.log("Grade: F (Fail)");
}


/********************************************************************
 * 3. NESTED IF
 ********************************************************************/
console.log("\n***** 3️⃣ Nested if *****");

// Example: Driving eligibility
let personAge = 20;
let hasLicense = true;

if (personAge >= 18) {
   if (hasLicense) {
      console.log("🚗 You can drive a car");
   } else {
      console.log("⚠️ You need a driving license first");
   }
} else {
   console.log("❌ Too young to drive");
}


/********************************************************************
 * 4. SWITCH CASE
 ********************************************************************/
console.log("\n***** 4️⃣ Switch Case *****");

// Example: Days of the week
let day = 5;

switch (day) {
   case 1:
      console.log("Monday");
      break;
   case 2:
      console.log("Tuesday");
      break;
   case 3:
      console.log("Wednesday");
      break;
   case 4:
      console.log("Thursday");
      break;
   case 5:
      console.log("Friday");
      break;
   case 6:
      console.log("Saturday");
      break;
   case 7:
      console.log("Sunday");
      break;
   default:
      console.log("❌ Invalid day number");
      break;
}

// Example: Calculator
let operator = "*";
let n1 = 6, n2 = 3;

switch (operator) {
   case "+":
      console.log(`${n1} + ${n2} =`, n1 + n2);
      break;
   case "-":
      console.log(`${n1} - ${n2} =`, n1 - n2);
      break;
   case "*":
      console.log(`${n1} * ${n2} =`, n1 * n2);
      break;
   case "/":
      console.log(`${n1} / ${n2} =`, n1 / n2);
      break;
   default:
      console.log("❌ Invalid operator");
}


/********************************************************************
 * 5. TERNARY OPERATOR (Shorthand for if-else)
 ********************************************************************/
console.log("\n***** 5️⃣ Ternary Operator *****");

// Example 1: Simple age check
let ageCheck = 20;
let canVote = (ageCheck >= 18) ? "✅ You can vote" : "❌ You cannot vote";
console.log(canVote);

// Example 2: Nested ternary (NOT recommended, but possible)
let marks = 85;
let grade = (marks >= 90) ? "A+" :
   (marks >= 75) ? "A" :
      (marks >= 60) ? "B" :
         (marks >= 40) ? "C" : "F";
console.log("Grade is:", grade);

// Example 3: Even/Odd
let numberCheck = 11;
console.log(numberCheck % 2 === 0 ? "Even" : "Odd");

/*
# Quick Notes
>> ✅ Ternary operator → (condition) ? value_if_true : value_if_false

>> ✅ Use it for short and simple conditions.

>> ❌ Avoid nested ternaries (too hard to read). For complex cases, stick with if-else.
 */