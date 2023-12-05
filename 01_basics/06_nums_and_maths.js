let num =   100   

console.log(num);
console.log(num.toString()); // temporary changes the type number to string
// console.log(typeof num);

console.log(num.toFixed(2)); // to get number in decimal format use in ecommerce

const otherNumber = 423.28366
console.log(otherNumber.toPrecision(3)); // round of the values

const oneHundred = 10000000000;
console.log(oneHundred.toLocaleString()); // output in us format
console.log(oneHundred.toLocaleString('en-IN')); // output in indian format
