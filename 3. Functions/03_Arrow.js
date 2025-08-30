/*****************************************************
 * TOPIC: Objects, `this` keyword, and Arrow Functions
 *****************************************************/

/*
  👉 Objects in JavaScript
  - An object groups related data (properties) and functions (methods).
  - `this` inside an object method refers to the object itself.
*/

const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log("Inside user1 object:", this); // 'this' points to user1
    }
};
user1.welcomeMessage();

user1.username = "sam"; // Changing property value dynamically
user1.welcomeMessage();

/*****************************************************
 * Global `this` in different contexts
 *****************************************************/

/*
  👉 `this` in global scope
  - In Node.js → {} (empty object)
  - In Browser → window (global object)
*/
console.log("Global this:", this);

/*
  👉 In a normal function:
  - `this` depends on how the function is called.
  - In non-strict mode → global object
  - In strict mode → undefined
*/
function chaiNormal() {
    console.log("Inside normal function (chaiNormal):", this);
}
chaiNormal();

/*****************************************************
 * Arrow functions and `this`
 *****************************************************/

/*
  👉 Arrow functions do NOT have their own `this`.
  - They inherit `this` from their surrounding (lexical) scope.
  - Useful when you don’t want to lose `this` context.
*/
const chaiArrow = () => {
    let username = "hitesh";
    console.log("Inside arrow function (chaiArrow):", this);
};
chaiArrow();

/*****************************************************
 * Arrow function return styles
 *****************************************************/

/*
  👉 Arrow function variations:
  - Explicit return → use `return`
  - Implicit return → single line without `return`
  - Returning an object → wrap object in parentheses
*/

// Explicit return
const addTwoExplicit = (num1, num2) => {
    return num1 + num2;
};
console.log("addTwoExplicit(3, 4):", addTwoExplicit(3, 4));

// Implicit return (single expression)
const addTwoImplicit = (num1, num2) => num1 + num2;
console.log("addTwoImplicit(5, 7):", addTwoImplicit(5, 7));

// Implicit return with parentheses
const addTwoParen = (num1, num2) => (num1 + num2);
console.log("addTwoParen(10, 20):", addTwoParen(10, 20));

// Returning an object → must wrap in parentheses
const returnObject = (num1, num2) => ({ username: "hitesh", sum: num1 + num2 });
console.log("returnObject(5, 4):", returnObject(5, 4));
