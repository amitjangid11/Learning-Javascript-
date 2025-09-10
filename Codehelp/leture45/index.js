// Hoisting concept
{
    sayMyName("Amigos")

    function sayMyName(finalName) {
        console.log(finalName);
    };

}

// Variable Hoisting
{
    console.log(age);
    var age = 25;
}

// variable hoisting - another case : using let and const
// console.log(price);
// let price = 100000;


// function hoisting - another case : function expression
// sayHello(); - error
// let sayHello = function () {
//     console.log("Hello World");
// }

// Class hoisting

// const obj1 = new Human();
// class Human{

// }


/******** #Function Callstack *********/

