/*
    prefer not to use var
    because of issue in block scope and functional scope
    if we not define the variables like => accountLocation; then in output it will shows the undefine
*/
const accountId = 2619992903
let accountEmail = "kunal@github.com"
accountPassword = "12345"
accountCity = "Dhule"

// console.log(accountId);

accountEmail = "git@git.com"
accountPassword = "9191919191"

console.table([accountEmail, accountPassword, accountCity])
