// let var const 


// hamesha jab bhi ham koi project ya kuch bhi application banate hai ham data ko store karet hai jiske liye hame memory ki need hoti hai thats why we are study let var and const 

const accountId =0; // how to wrte any variable inki different format hota hai this format is called Camel Case notation
let accountEmail = "mohit@gmail.com";
var accountPassword = "password";
accountCity = "pune";
let accountState;
console.log(accountState)


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);



// acountId=5; // this is not allowed because it is a constant value 
accountEmail="himantsingh@gmail.com";
accountPassword = "newpassword";
accountCity = "jaipur";


console.table([accountId, accountEmail, accountCity,accountPassword]);

{
    // this is called scope 
}

/*
prefer not tu use var  because of issue in block and functional scope 
var dont know the scope and change the value assign in everywhere it is present 

let knowTheScope = outside or inside and the const also knows this scope concept
*/

