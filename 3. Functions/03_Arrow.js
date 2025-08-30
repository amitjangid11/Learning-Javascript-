const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);



/* 
function chai(){
    console.log(this);
}

chai(); */

/** 
const chai = () => {
    let username = "hitesh";
    console.log(this);
}

chai();
*/

// Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1, num2) => num1 + num2;//implicit return
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ({ username: "hitesh" });
// how to print username
console.log(addTwo(5, 4));
