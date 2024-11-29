const accountId = 912507
let accountEmail = "Arsalan@gmail.com"
var accountPassword = "12345"
accountCity = "Azamgarh"
let accountState

//  accountId = 2 /iss account id ko hmm change nahi kr skte ku ki ye ek constent value hai

accountEmail = "nawaz@google.com"
accountPassword = "54321"
accountCity = "Bindawl"


console.log(accountId);
/*
prefer not to use var
because of isse in block scope and functional scope
*/

console.table({accountEmail,accountId,accountPassword,accountCity,accountState})