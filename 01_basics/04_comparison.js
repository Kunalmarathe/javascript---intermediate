// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// #### askes in interview the below comparisons.

// console.log("2" < 1);
// console.log("02" > 1);

// here sometimes it convers in NaN or sometimes in 0. Strictly check the output first
// ### avoid the below conversions ###

// console.log(null > 0); // output => false 
// console.log(null == 0); // output => false here the null is converted into the 0 because of 
// equality check, that's why below line
// console.log(null >= 0); // output => true  the output shows true null = 0 as per the conversion

// console.log(undefined == 0); // here all three output are 0. 
// console.log(undefined > 0); // likewise null, undefine is not converted into the 0.
// console.log(undefined >= 0);

// ===   here using triple eual it strictly check the numbers and their datatypes also.

console.log("2" === 2); // output=> false