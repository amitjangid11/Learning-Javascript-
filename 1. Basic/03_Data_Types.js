// alert(3+3) --> Error bcoz we are using nodejs not browser

console.log(3 + 3); // it will work but not same function as alert();

// DataTypes :
/*
# Primitive Datatype
1) number => 2 to power 53
2) bigint => bigger than number
3) string => ""
4) boolean => true/false
5) null
6) undefined
7) symbol => unique

#Object

*/

let age = 18;
let isLogged = true;
let sum = null;

console.log(typeof null); //object
console.log(typeof age); //number
console.log(typeof undefined); //undefined

// 7-types of primitice datatype :
/*
1) String
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt
*/
const score1 = false;
console.log(typeof (score1));

const bigNumber = 1212121212121212n;
console.log(typeof (bigNumber));

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

// Reference (Non Primitive) :
/*
1) Array
2) Objects
3) Functions
*/

//Arrays
const heros = ["Shaktiman", "Ironman", "Superman"];

//Objects
const myObj = {
    name: "Amit",
    age: 21,
    Gender: 'M'
}

// Function
const myFunction = function () {
    console.log("Hello World!");
}

console.log(typeof myFunction);

//*****Memory-Organization*****//

/*
1. Stack(Primitive) Memory 
*/
let friend_1_School ="SDA";
let friend_2_School = friend_1_School;
friend_2_School = "SRPS";
console.log(friend_2_School);
console.log(friend_1_School);

/*
2. Heap(Non-Primitive) Memory
*/
let userOne = {
    email: "abc@gmail.com",
    upi: "abc@ybl"
}

let userTwo = userOne;
userTwo.email = "amit@gmail.com";
// Way to acces
console.log(userTwo.email);
console.log(userOne.email);