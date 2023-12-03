// js is statically typed or dinamically typed language??

// became expert in .js => master in Objects in .js and web event or browser event.

// Primitive (call by value)

// 7 types : String, Number, BigInt, Boolean, undefine, null, Symbol

const score = 100
const scoreValue = 100.3 // here no need to define 100.3 as float 

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined // here if we write userEmail; then it internally
// consider as undefined

const id = Symbol('432')
const anotherId = Symbol('432') 
//console.log(id === anotherId); // output => false, those there Symbol('432') is same
// but it always unique internally

const bigNumber = 2983742893490822039n // by mention n at last it shows big size number
// internally bigNumber is automatically converted as BigInt

// Non - primitive (call by referance) 3 types 

// Array

const months = ["Jan", "Feb", "March", "April", "May"]

// Object

{
    name : "Kunal"
    age : 24
}

// also we can write it in a variable

let myObj = {
    name : "kunal",
    age : 24
}

// Function

void function(){
    console.log("Hello World")
}

// we can store above function in variable

const myFunction = function(){
    console.log("Hello World")
}

//console.log(typeof anotherId); // typeof everything in this code gives ans
// beyond expectations

// *********************************** Memory Allocation ****************************************

// stack (Primitive) & Heap (Non-Primitive)

// stack =>

let myFevPlace = "Kedarnath"

let anotherPlace = myFevPlace // in primitive data type it gives the copy of that varible value
anotherPlace = "Ladakh" // here we change the value of anotherPlace but it not change the value of myFevPlace
// it only changes the value of anotherPlace because it is the copy of original one that is myFevPlace

console.log(myFevPlace);
console.log(anotherPlace);

// Heap =>

let user1 = {
    email: "kunal1234@gmail.com",
    mobNo: 74323234
}

let user2 = user1; 
// console.log(user2.email) // here the output is same as in user

user2.email = "Kunal63423@gamil.com"
console.log(user2.email) // here the value in main user also got change, because referance of user1 is email
