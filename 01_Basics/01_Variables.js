const accountId = 22445;
let accountEmail = "test@gmail.com";
var accountPassword = "123454";
accountCity = "Jaipur";
let accountState;
// accountId = 2; //not allowed

/*
prefer not to use Var
Because of issue in block scope and functional scope
*/

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);