// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// Don’t forget to commit early & often! You can reference the Commit Message lesson here!


console.log("*.*.*.*.*.Welcome to Rock Paper Scissors Game.*.*.*.*.*.")

/* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly 
return either 
‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/
function getComputerChoice()
{
/* 
Pseudocode for getComputerChoice
-We have three choices so generate three random numbers
-Based on the number generated we can run a conditonal statement to give out what has been generated by the computer
-Following can be used to link the random number to the choice
Rock=0
Paper=1
Scissors=2
*/
/* Below code will randomly generate a number between 0 and 1 and multiply by three and rounded to nearest number
in order to give a full number between 0 and 2 */
let randomNumber=Math.floor(Math.random()*3); 
let choice;
if (randomNumber ==0) {
    let choice="Rock"
    return choice;
}

else if (randomNumber == 1) {
    let choice="Paper"
    return choice;

}

else if (randomNumber==2){
    let choice="Scissor"
    return choice;
}


}

console.log(getComputerChoice());




//     Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//     Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//     Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:





//     function playRound(playerSelection, computerSelection) {
//       // your code here!
//     }
     
//     const playerSelection = "rock";
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));





// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//     You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.



//     At this point you should be using console.log() to display the results of each round and the winner at the end.



//     Use prompt() to get input from the user. Read the docs here if you need to.


//     Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.




//     Feel free to create more “helper” functions if you think it would be useful.