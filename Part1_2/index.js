// Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
// Your tasks: 
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
// BMI (28.3) is higher than John's (23.9)!" 

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

//4. Print a nice output to the console.
if(markHigherBMI)
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
else
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);

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

if(markHigherBMI)
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
else
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);


