//falsy values are values that are considered false when evaluated in a boolean context. In JavaScript, the following values are considered falsy:

let age = 2; // falsy
if (age) {
    console.log("age is truthy");
}
else {
    console.log("age is falsy");
}
console.log(age* "hello")//NaN
console.log(age* 0)//false
console.log(typeof NaN)//0
console.log(typeof null)//object

