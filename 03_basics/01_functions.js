// function holeName(){
//     console.log("k");
//     console.log("u");
//     console.log("n");
//     console.log("a");
//     console.log("l");
// }

// holeName()

// function addNumber(num1, num2){
//     console.log(num1 + num2);
// }

// addNumber(1, 2)
// addNumber(1, "3") // act as string output is 13
// addNumber(1, "a") // output => 1a
// addNumber(1, null) // output => 1

// const ans = addNumber(1, 2)

// console.log("Answer is: " , ans); // here the output is undefine because function is 
// printing the ans not returning. That's why the ans dosen't store here

// to store the value in a ans variable write above function as

// function addNumber1(num1 , num2){
//     return num1 + num2
//     console.log("anything"); // any line after return is not exicutable
// }

// const ans2 = addNumber1(1, 2)

// console.log("Answer is:", ans2);

function loginUserStatus(username){
    if(!username){
        console.log("Please enter a username");
        return // here return is used for not to exicute the lines after it.
    }
    return `${username} is logged in`
}

console.log(loginUserStatus());
// if we want to print the default user name for login then mention the default name
// in the function declaration like function loginUserStatus("Tom"){   }