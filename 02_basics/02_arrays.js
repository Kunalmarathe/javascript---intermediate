const suzuki_car = ["baleno", "swift", "ertiga", "desire"]
const mahindra_car = ["tiago", "altroz", "punch", "marier", "nano"]
const rollsroys_car = ["phantom", "ghost", "tailboat"]

// unappropriate way to concat 
// suzuki_car.push(mahindra_car)
// console.log(suzuki_car[3][1]);

// appropriate way to concat
// const newArray = suzuki_car.concat(mahindra_car)
// console.log(newArray);

// here we can concat more than 2 arrays
// const arr1 = [...mahindra_car, ...suzuki_car, ...rollsroys_car]
// console.log(arr1);

const arr2 = [1, 2, 3, [1, 2, 3, 4, 5], 3, 5, 7,[10, 11, 12]]
// .flat(n) in the position of n we have to palce depth of the array
// if we know the depth mention it otherwise write infinity
// console.log(arr2.flat(Infinity));

// also we can ask or conver other datatype into array

console.log(Array.isArray("kunal"));
console.log(Array.from("kunal"));
console.log(Array.from({name : "hitesh"})) // Special case

let score1 = 10
let score2 = 20
let score3 = 30

console.log(Array.of(score1, score2, score3));