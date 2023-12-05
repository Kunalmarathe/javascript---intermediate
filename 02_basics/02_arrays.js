const suzuki_car = ["baleno", "swift", "ertiga", "desire"]
const mahindra_car = ["tiago", "altroz", "punch", "marier", "nano"]
const rollsroys_car = ["phantom", "ghost", "tailboat"]

// unappropriate way to concat 
// suzuki_car.push(mahindra_car)
// console.log(suzuki_car[3][1]);

// appropriate wat to concat
// const newArray = suzuki_car.concat(mahindra_car)
// console.log(newArray);

const arr1 = [...mahindra_car, ...suzuki_car, ...rollsroys_car]
console.log(arr)