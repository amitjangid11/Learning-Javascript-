/**************************************************
 * PART 1: Creating Objects
 **************************************************/
// Two ways:
// const tinderUser = new Object(); // Constructor way
const tinderUser = {};              // Literal way (preferred)

// Adding properties dynamically
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


/**************************************************
 * PART 2: Nested Objects
 **************************************************/
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "Jangid"
        }
    },
    address: "Jaipur"
};

// Access nested property
console.log(regularUser.fullname.userfullname.firstname); // Amit


/**************************************************
 * PART 3: Merging Objects
 **************************************************/
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// ❌ This nests objects, not merge
// const obj3 = { obj1, obj2 };

// ✅ Method 1: Object.assign(target, ...sources)
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// ✅ Method 2: Spread operator (modern + cleaner)
const obj3 = { ...obj1, ...obj2 };
console.log("Merged Object:", obj3);


/**************************************************
 * PART 4: Array of Objects
 **************************************************/
const users = [
    { id: 1, email: "abc@gmail.com" },
    { id: 2, email: "bcd@gmail.com" },
    { id: 3, email: "cde@gmail.com" }
];

// Access email of second user
console.log("Second user's email:", users[1].email);


/**************************************************
 * PART 5: Object Utility Methods
 **************************************************/
console.log(Object.keys(tinderUser));   // ['id','name','isLoggedIn']
console.log(Object.values(tinderUser)); // ['123abc','Sammy',false]
console.log(Object.entries(tinderUser)); 
// [['id','123abc'], ['name','Sammy'], ['isLoggedIn', false]]

console.log(tinderUser.hasOwnProperty('email')); // false
console.log(tinderUser.hasOwnProperty('id'));    // true


// Example-1 : Object.assign() vs Spread
/*
const a = { x: 1 };
const b = { y: 2 };

const merged1 = Object.assign({}, a, b);
const merged2 = { ...a, ...b };

console.log(merged1); // {x: 1, y: 2}
console.log(merged2); // {x: 1, y: 2}

*/

// Example 2 → Object.entries()
/*
const student = { name: "Amit", age: 21 };
console.log(Object.entries(student));
// [['name','Amit'], ['age',21]]

*/

//Example 3 → hasOwnProperty()
const car = { brand: "Toyota" };
console.log(car.hasOwnProperty("brand")); // true
console.log(car.hasOwnProperty("color")); // false
