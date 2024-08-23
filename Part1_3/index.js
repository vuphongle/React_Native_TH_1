// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy


//Test data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

//Function to calculate average score
function calculateAverageScore(scores){
    let sum =0;
    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum/scores.length;
}

//Funtion to determine the winner
function determineWinner(dolphinsScores, koalasScores){
    const dolphinsAverageScore = calculateAverageScore(dolphinsScores);
    const koalasAverageScore = calculateAverageScore(koalasScores);

    if(dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore){
        console.log(`Dolphins win with an average score of ${dolphinsAverageScore}`);
    } else if(koalasAverageScore >= 100 && koalasAverageScore > dolphinsAverageScore){
        console.log(`Koalas win with an average score of ${koalasAverageScore}`);
    } else if(dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore === koalasAverageScore){
        console.log(`It's a draw with an average score of ${dolphinsAverageScore}`);
    } else {
        console.log("No team wins the trophy");
    }
}

//Test with data 1
console.log("Test with data 1");
determineWinner(dolphinsScores1, koalasScores1);

//Test with data 2
console.log("Test with data 2");
determineWinner(dolphinsScores2, koalasScores2);

//Test with data 3
console.log("Test with data 3");
determineWinner(dolphinsScores3, koalasScores3);

