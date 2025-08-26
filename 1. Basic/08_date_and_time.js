// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,5,23);
// let myCreatedDate = new Date(2023,5,23,5,3,30);
// let myCreatedDate = new Date("2023-01-14");

/*
let myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000 + 1));
*/

let newDate = new Date();
console.log(newDate.toDateString());
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// Important

newDate.toLocaleString('Default',{
    weekday: "long",
})
