// two types se data type hute hai primitive and non primitive or refrence type bhi bulte hai non primitive
// 1 primitive(ye call by value hute hai)
// 7 types ke hute hai ye: String, Number, null, undefined, Symbol, BigInt

    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId);

    // const bigNumber = 345678912345n


// REfrence (non primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = // curleee braket ke andar ju kuch bhi value hu gyi wo data type hugyi
// data type kuch bhi hu skta hai string, number , boolean function array etc bhi hu skta hai
{
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}
// we use typeof means kii her baar console.log likhne ki zaroorat nhi hugyi
// hmm  sirf iska use kr ke jiske bhi output nikalna hu nikal skte hai

console.log(typeof isLoggedIn);


// ye sare data types hai ju ki typeof se kya output aate hai wo hai
// * Premitive Datatypes

//          Type                       typeof

// i)       Number                      number
// ii)      String                      string
// iii)     Boolean                     boolean
// iv)      Bigint                       bigint
// v)       Symbol                       symbol
// vi)      Null                         object
// vii)     Undefined                    undefined


// * Non-Premitive OR Referance OR Object datatype

//           Type                 typeof

// i)        Object                object
// ii)        Array                 object
// iii)       Function              function(object)