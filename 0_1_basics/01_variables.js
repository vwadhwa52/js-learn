const accountId = 144553
let acccountEmail = "v@g"
var accountPassword = "12345"
accountCity = "lucknow"

// accountId = 2 // Not allowed
acccountEmail = "vw"
accountPassword = "4445"
accountCity = "gurgaon"

/*
Never never use var variable,
bevause of issue in block scope in functional scope
 */
console.log(accountId);
console.table([accountId,acccountEmail,accountPassword,accountCity])