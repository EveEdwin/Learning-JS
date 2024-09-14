// conversion and operations 

let score = 33;
console.log(typeof score)

let name = "mohit";
console.log(typeof name);


let score2 = "33"; // easy conversion 
let valueInNumber = Number(score2);
console.log(typeof valueInNumber)

let score3 = "33abc";
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2)
console.log(valueInNumber2) // always check it before conversion of the string to number 

let score4 = null; // convert to 0 and return number
let valueInNumber3 = Number(score4);
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score5 = undefined; // convert to NaN and return number
let valueInNumber4 = Number(score5);
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

let score6 = true;  // convert to true =1 and false = 0
let valueInNumber5 = Number(score6);
console.log(typeof valueInNumber5)
console.log(valueInNumber5)




let isLogedIn =0;   // yess this convert this to false and true value 
let convertBool = Boolean(isLogedIn);
console.log(convertBool);



let isLogedIn2 ="";   // "" ==> false aati hai and || "something"   ==> true aati hai values
let convertBool2 = Boolean(isLogedIn2);
console.log(convertBool2);


let numbersValue = 33;
let stringNew = String(numbersValue);  //this really canges the number to a string value 
console.log(stringNew);
console.log(typeof(stringNew));
