// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

//1. Store Mark's and John's mass and height in variables

let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

//2.  Calculate both their BMIs using the formula

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.

let markHigherBMI = markBMI > johnBMI

console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Does Mark have a higher BMI than John?: ${markHigherBMI}`);

// Test data 2
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight ** 2);

markHigherBMI = markBMI > johnBMI

console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);
console.log(`Does Mark have a higher BMI than John?: ${markHigherBMI}`);

