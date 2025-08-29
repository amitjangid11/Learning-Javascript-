// var c = 30;
let a = 100;
if (true) {
    let a = 10;
    const b = 20;
    //  console.log("Inner : ",a);

    // c = 300;
}

//console.log(a); // out of scope -error
//console.log(b); // out of scope -error
// console.log(c); // No-error



// Part-2

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}
// one();
const random = "hello"
if (true) {
    const username = "Amit";
    if (username === "Amit") {
        const website = "youtube";
        //    console.log(username + website);
    }
    //  console.log(website);
}

//console.log(username);




//+++++++++++++Interesting Concept++++++++

// here we learned about hoisting

// fucntion calling
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


const addTwo = function (num) {
    return num + 2;
}


//function calling
addTwo(5);
