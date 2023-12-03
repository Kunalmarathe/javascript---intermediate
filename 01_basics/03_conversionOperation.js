
let score = true // use undefine, "kunal", "", 33 also here

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33 #here type is number
// "33abc" => NaN #here type is number
// true => 1 , true => false

let isLoggedIn = "kunal" // here ans is true 

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "Kunal" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(typeof stringNumber);

// ******************************** Operations *************************************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);      // 2^2
// console.log(2**3);     // 2^3
// console.log(2%2); // usually it uses in cryptograpy and algorithum

let str1 = "hello"
let str2 = " Kunal"

let str3 = str1 + str2 // here for string format only adding is allowed
// console.log(str3); // output => hello Kunal

// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log("1" + 2 + 2) // output => 122 here it giving the preferance of first data type
// console.log(1 + 2 + "2") // output => 32

// console.log(+true); // It's not a good practice. It gives the output 1 because it's already boolean. true+ not allowed
console.log(""); // not gives a value
console.log(+""); // it gives output as 0. Because it converts the "" as boolean.

let gameCounter = 100
++gameCounter; // here prefix and postfix gives the same ans ##check on mdn for this .js
console.log(gameCounter);
