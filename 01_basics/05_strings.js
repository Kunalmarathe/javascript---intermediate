
// here in .js the string is denoted as "" or '' both are same
// conscat

// let string1 = new String("smart");
// let string2 = new String("city");

// we can also define above words for concatination like

const string1 = "city"
const count = 10

//console.log(string1 + count + "total"); // it's older way to concat 

console.log(`There are total ${count} smart ${string1.toUpperCase()}`);
// above is better to understand and also we can use method parallely in it

const cityName = new String('Dhule')
// if we open it in web console the 'h' is in 1 positon. this term is key value pair 

// console.log(cityName[3]);
// console.log(cityName.__proto__); // output => outerside of the string thet is {}

// console.log(cityName.length);
// console.log(cityName.toUpperCase());
// console.log(cityName.charAt(2));
// console.log(cityName.indexOf('u'))



// const newString1 = cityName.substring(0, 4)
// console.log(newString);

// const newString2 = gameName.slice(-9, 4) // another method to print the string
// console.log(newString2);

const newString3 = "   kunal   "
console.log(newString3);
console.log(newString3.trim()); // only trims the front and back blank spaces

const url = "https://kunal.com/kunal%101marathe"
console.log(url.replace('%101','-')); // use to replace unwanted characters

console.log(url.includes('kunal%'));

const string4 = new String("kjd-jdl-lsdj")
console.log(string4.split('-', 3));// also write as .split('-') // output => [ 'kjd', 'jdl', 'lsdj' ] 
// in the above function the split method gives array on the basics of '-'
