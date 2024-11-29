// let score = 33 // agar hmm isse aaise likhe hai tu number aaya hai 

let score = "arsalan"
// true or false me 1/0
//  undefined me bhi NaN (means not a number)
// null //  agar null daal kr show kare tu zero aata hai result me
// "33abc"
// wahi agar hmm isse double court me likhe tu string means

// console.log(typeof score);
    // ye do tarika hai type check krne ka kesi se bhi kr skte hai
// console.log(typeof (score));

// abb ju ye "33"  upper wala number string me change hu gya hai usse number me change krenge iske lea hmm 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// isme hmm dekhe kii string ko number me prove kiya hai  ki ye ek number hai per isme agar hmm abc daale tu kya abhi bhi wahi number dey ga ya string me change hu jaae ga

// console.log(valueInNumber);
// then ye show kr raha hai NaN means not a number

// easily convert hu jata hai "33" => 33
// "33abc" => NaN (wahi hmm koi string le lee tu nhi huta hai conert)
// true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => true
// "" => false
// "hitesh" => true

let someNumber = 33; // Use a number for demonstration
let stringNumber = String(someNumber); // Correct way to convert to string
// console.log(stringNumber); // Outputs: "33"
// console.log(typeof stringNumber); // Outputs: "string"

// ******************* Operations *********************

let value = 3
// let negValue =  -value
// console.log(negValue);

// some basic operations we use in mathmatics

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// when we add two string 

let str1 = "hello"
let str2 = " Arsalan"

let str3 = str1 + str2
// console.log(str3);

// ye kuch operations hai jisme aagar hmm pahle string likhenge tu wo as a string work kare ga
// like first wala ju hai usse hmm print kea tu 1 and 2 outout hai
// 3rd wala print kiya tu usme 122 output tha
// but 4th wala print kea tu usme pahle addition kiya phir ju string ki value thi wo likha 32
// console.log("1 " + 2);
// console.log(1 + "2");
//  console.log("1" + 2 + 2);
//  console.log(1 + 2 + "2");

// wahi ek nayii cheez hai boolean me (+true kea tu uska output 1 aaya )
// wahii true+ kea tu error aata hai
console.log(+true);

console.log(+"");    // isme 0 output aae gaa

// variable ko iss tarah define karu ki wo readable hu samjh aae logo ko aur usse padha ja sake 
// like
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix and postfix operation 
let gameCounter = 100
gameCounter++;
console.log(gameCounter);
