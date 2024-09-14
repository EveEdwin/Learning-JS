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



// *********************** Operators ********************

let a = 10;
let b = 5;

let sum = a + b;
let negsum = -sum
console.log(sum); // normal sum is here
console.log(negsum); // negative sum is here


// console.log(5+6);
// console.log(5-6);
// console.log(5*6);
// console.log(5/6);
// console.log(5**6);
// console.log(5%6);

// concatination of the strings

let firstName = "Mohit";
let lastName = "Singh";
let fullName = firstName + " " + lastName;
console.log(fullName);


console.log("1" + 5); 
console.log(1 + "5");
console.log("1" + 2 + 2); // important for concept building         string jo first hai usme use kiya jayega 
console.log(1 + 2 + "2");   // important for concept building


console.log(typeof("1" + 5)); 
console.log(typeof(1 + "5"));
console.log(typeof("1" + 2 + 2));
console.log(typeof(1 + 2 + "2"));

// prefix and postfix study;

let gameCounter = 1000;
gameCounter++;
console.log(gameCounter);