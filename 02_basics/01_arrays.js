// ## Diffrence bet'n shallow copy and deep copy
/* shallow copy gives the reference of that object. By using it we can manipulate
    original values of the that object. ## foreg. splice()
    Deep copy don't gives the refrence of that object. hence there no chance
    to manipulating the main object values. ## foreg. slice()
*/ 

// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);
console.log(myArr[8]);
const myVisitedCities = ["pune", "mysore"]

// Array methods

// myArr.push(10)
// console.log(myArr);
// myArr.pop(10)
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(2)); // boolean type
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(19)); // output is -1

// const newArr = myArr.join() // adds all the elements of an arrat into a string
// console.log(newArr);
// console.log(typeof newArr);

