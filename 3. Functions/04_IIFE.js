// Immediately Invoked Function Expressions(IIFE) - Used to handle Global Scope Pollution

// Named IIFE
(function chai(){
    console.log(`Db connected One`)
})();

// chai(); // Normal function calling

// Example-2 : This will give if ; not added to the last IIFE 

// Un Named IIFE
((name) => {
console.log(`DB connected Two : ${name}`);
})("Amit");