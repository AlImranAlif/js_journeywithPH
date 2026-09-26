let weight = process.argv[2];
let height = process.argv[3];
const calculateBMI = (weight, height) => weight / (height * height);
//console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}.`);

if(calculateBMI(weight, height) < 18.5){
    console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}. You are underweight.`);
}
else if(calculateBMI(weight, height) >= 18.5 && calculateBMI(weight, height) < 24.9){
    console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}. You are normal weight.`);
}
else if(calculateBMI(weight, height) >= 25 && calculateBMI(weight, height) < 29.9){
    console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}. You are overweight.`);
}
else{
    console.log(`The BMI is ${calculateBMI(weight, height).toFixed(2)}. You are obese.`);
}   