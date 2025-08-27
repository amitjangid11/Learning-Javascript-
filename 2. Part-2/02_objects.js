// singleton

// object literal
const mySym = Symbol("key1");
const JsUser = {
    name: "Amit",
    "full name": "Amit Jangid", // now you can't access with ( . )dot
    [mySym]: "myKey1",
    age: 21,
    location: "Jaipur",
    email: "amitjangid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // Only this way
console.log(JsUser[mySym]);

JsUser.email ="jangidamit@gmail.com";
Object.freeze(JsUser);
JsUser.email ="jangid@gmail.com";
console.log(JsUser);
*/
JsUser.greeting = function () {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());