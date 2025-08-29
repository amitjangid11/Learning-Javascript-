

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();
/*
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    
}
*/
function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(3, 3);
console.log("Result : ", result);

addTwoNumbers(3, "3");
addTwoNumbers(3, null);


function loginUserMessage(username = "sam") {
    // if(username === undefined){
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// const endMessage = loginUserMessage("Amit");
const endMessage = loginUserMessage();
console.log(endMessage);



// Function

function calculateCarPrice(...num1) {
    return num1;
}
function calculateCarPrice1(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCarPrice(2));
// console.log(calculateCarPrice(200,400,500,900)); // -> argument more than allowed parameter so we use rest and spread operator

// console.log(calculateCarPrice1(100,200,300, 400,500,600));

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
function handleObject1(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user); // function calling
handleObject1({ // direct passing parameters
    username: "sam",
    price: 499
})


//Passing arrays to the objects
const myNewArray = [100,200,300,400,500];

function returnSecondValue(getArray) {
    return getArray[1]
}
const myNewArray1 = [100,200,300,400,500];

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400,500]));