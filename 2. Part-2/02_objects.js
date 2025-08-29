/**************************************************
 * PART 1: Creating an Object (Object Literal)
 **************************************************/
const mySym = Symbol("key1"); // Unique symbol key

const JsUser = {
    name: "Amit",
    "full name": "Amit Jangid",   // Cannot access with dot, only with ["full name"]
    [mySym]: "myKey1",            // Symbol as key
    age: 21,
    location: "Jaipur",
    email: "amitjangid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


/**************************************************
 * PART 2: Accessing Properties
 **************************************************/
// console.log(JsUser.email);          // dot notation
// console.log(JsUser["email"]);       // bracket notation
// console.log(JsUser["full name"]);   // only works with bracket notation
// console.log(JsUser[mySym]);         // access Symbol key


/**************************************************
 * PART 3: Freezing the Object
 **************************************************/
// Update before freeze
// JsUser.email = "jangidamit@gmail.com";

// Freeze prevents further changes
// Object.freeze(JsUser);

// Trying to update after freeze → no effect
// JsUser.email = "jangid@gmail.com";
// console.log(JsUser);


/**************************************************
 * PART 4: Adding Methods (Functions inside Object)
 **************************************************/
JsUser.greeting = function () {
    console.log("Hello Js User");
};

JsUser.greetingTwo = function () {
    // "this" refers to the current object JsUser
    console.log(`Hello Js User, ${this.name}`);
};


// Calling methods
console.log(JsUser.greeting());    // Prints → Hello Js User, then undefined
console.log(JsUser.greetingTwo()); // Prints → Hello Js User, Amit, then undefined


/* --> Why 'this' is important
const person = {
    name: "Rahul",
    sayName: function() {
        console.log(this.name); // refers to person object
    }
};
person.sayName(); // Rahul

*/

/* --> without 'this'
const person2 = {
    name: "Rahul",
    sayName: function() {
        console.log("Hello, " + name); // 'name' not defined in this scope
    }
};
person2.sayName(); // ❌ Error: name is not defined

*/

/* --> Object.freeze in action
const obj = { a: 1 };
Object.freeze(obj);

obj.a = 2; // ❌ no effect
obj.b = 3; // ❌ cannot add new property
console.log(obj); // { a: 1 }

*/