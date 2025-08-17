/*
#Note :
1) Prefer not to use 'var' because of issue of block scope and functional scope
*/
const accountID = 1010;
let accountEmail = "amit@gmail.com";
var accountPassword = "70142";
accountCity = "Jaipur";
let accountState;

// accountID = 10; #Updation not allowed

accountEmail = "jangid@gmail.com";
accountPassword = "7877";
accountCity = "Banglore";

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

// Another way to print 
console.table([accountID, accountEmail, accountPassword, accountCity,accountState]);