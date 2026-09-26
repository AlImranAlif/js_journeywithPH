//input form terminal

const weight= process.argv[2];
const height= process.argv[3];
//console.log(`The weight is ${weight}.`);
/*function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}
console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}.`);
*/
const calculateBMI = (weight, height) => weight / (height * height);
console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}.`);