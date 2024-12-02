// normal conversions hai ye
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 != 1);
// console.log(2 == 1);

// phir aate hai kuch alag conversion jaise ki string aur alag koi data le lee
// isme pareshani huti hai samjhne me 

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true

// The reason is that an equality check == and comparison < > >= <= work differently.
// Comparisons convert null to a number, trating it as 0.
// That"s why(3) null >= 0 is true and (1) null >0 is false.


// isme teeno hi false aae gaa
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===
console.log("2" === 2);
