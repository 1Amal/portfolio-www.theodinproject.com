// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// Don’t forget to commit early & often! You can reference the Commit Message lesson here!
let currentRound=0;
let playerScore=0;
let computerScore=0;

console.log("*.*.*.*.*.Welcome to Rock Paper scissors Game.*.*.*.*.*.")

/* Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly 
return either 
‘Rock’, ‘Paper’ or ‘scissors’. We’ll use this function in the game to make the computer’s play. 
Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

/* 
Pseudocode for getComputerChoice
-We have three choices so generate three random numbers
-Based on the number generated we can run a conditonal statement to write to console what has been generated by the computer
-Following can be used to link the random number to the choice
Rock=0
Paper=1
scissors=2

*/

function getComputerChoice(choice)
{
/* Below code will randomly generate a number between 0 and 1 and multiply by three and rounded to nearest number
in order to give a full number between 0 and 2 */
let randomNumber=Math.floor(Math.random()*3); 
//Following code will run conditional statements to give out Rock, Paper or Scisors based on the random number generated

if (randomNumber ==0) {
    choice="rock"
    return choice;
}

else if (randomNumber == 1) {
    choice="paper"
    return choice;

}

else if (randomNumber==2){
    choice="scissors"
    return choice;
}

}

/*

Write a function that plays a single round of Rock Paper scissors. The function should take two parameters - 
the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
"You Lose! Paper beats Rock"
 Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or 
    any other variation).
important note: you want to return the results of this function call, not console.log() them. 
You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

*/

//This function will prompt for user input
function playerAnswer(){
    alert("Welcome to Rock Paper Scissors, please make your selection by clicking the buttons")
// let playerSelectionRaw=prompt("Please Enter your choice (Rock, Paper or scissors)"); //This will prmompt for player choice
// let playerSelection=playerSelectionRaw.toLowerCase() // This will turn anything entered into lower case
let playerSelection='';
const rock=document.querySelector('#rock');
rock.addEventListener('click',()=>{
    console.log("Clicked Rock");

                                });

const paper=document.querySelector('#paper');
paper.addEventListener('click',()=>{
    console.log('Clicked Paper')
                                });

const scissors=document.querySelector('#scissors');
scissors.addEventListener('click',()=>{
    console.log('clicked Scissors')
                                });



return playerSelection;


}


/*Psuedo code for playRound
-Ask for player choice and also recive computerSelection value from getComputerChoice()
-compare the player choice with the computer choice
-Use this logic to decide who is the winner
    -Rock beats scissors
    -scissors beat paper
    -Paper beats rock
    -If both players throw the same object, it’s a tie. In this situation

-If playerSelection = 'rock' and computerSelection='rock' then Draw
-If playerSelection = 'rock' and computerSelection='paper' then computer wins
-If playerSelection = 'rock' and computerSelection='scissors' then Player wins

-If playerSelection = 'paper' and computerSelection='rock' then Player wins
-If playerSelection = 'paper' and computerSelection='paper' then Draw
-If playerSelection = 'paper' and computerSelection='scissors' then Computer wins

-If playerSelection = 'scissors' and computerSelection='rock' then Computer wins
-If playerSelection = 'scissors' and computerSelection='paper' then Player wins
-If playerSelection = 'scissors' and computerSelection='scissors' then Draw
End of Psuedo code for playRound
*/
// console.log(computerSelection());

function playRound(playerSelection, computerSelection) {


console.log("Player selection: " + playerSelection)
console.log("Computer Selection: "+ computerSelection)
// if (playerSelection=="rock" && computerSelection=="rock")
//     {
//         return console.log("Both computer and user entered rock, hence it is a draw")
//     }

if (playerSelection=="rock") // Following logic will decide what the outcome is if user select rock
    {
        if (computerSelection=="rock")
        {
            return console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So it's a draw !")
        }
        
        else if (computerSelection=="paper")
        {
            console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So Computer wins !")
            return computerScore+=1; // This code will add 1 to Computer score
            
            
        }

        else (computerSelection=="scissors")
        {
            console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So Player wins !")
            return playerScore+=1; // This code will add 1 to Player score
        }
        
    }    

else if (playerSelection=="paper") // Following logic will decide what the outcome is if user select paper
    {
        if (computerSelection=="rock")
        {
            console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So Player wins !")
            return playerScore+=1; // This code will add 1 to Player score
        }

        else if (computerSelection=="paper")
        {
            return console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So it's a draw !")
        }

        else (computerSelection=="scissors")
        {
            console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So computer wins!")
            return computerScore+=1; // This code will add 1 to Computer score
        }

    }

else (playerSelection=="scissors")
{
    if (computerSelection=="rock")
    {
        console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So Computer wins !")
        return computerScore+=1; // This code will add 1 to Computer score
    }

    else if (computerSelection=="paper")
    {
        console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So player wins !")
        return playerScore+=1; // This code will add 1 to Player score
    }

    else (computerSelection=="scissors")
    {
        return console.log("You selected: " + playerSelection + " and Computer selected: " + computerSelection + " So it's a draw !")
    }

}
}


 

// console.log(getComputerChoice()); 
// console.log(playerAnswer()) 


/*
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//     You have not officially learned how to “loop” over code to repeat function calls… 
if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
//     At this point you should be using console.log() to display the results of each round and the winner at the end.
//     Use prompt() to get input from the user. Read the docs here if you need to.
//     Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
//     Feel free to create more “helper” functions if you think it would be useful.
*/

function game()
{
    currentRound+=1;  // This code will add 1 to the round so it can be limited to 5 rounds  
    console.log("************Round " + currentRound + "***********");
    playRound (playerAnswer(),getComputerChoice()); // Return function out put for player answer computer answer to playRound function

    
    
    console.log("Current round is: " + currentRound)
    
    console.log("Current Player score is: " + playerScore)
    console.log("Current Computer score is: " + computerScore)
}


//Below code will run the game for five times
function gameRounds(){
    for (let i = 0; i < 6; i++) 
{
    if (i<5)
    {
        game();
        
        

    }

    else
    {
        
        console.log("**********Game Over**********")

        if (playerScore < computerScore) 
        {
            console.log("Computer wins as Player score is: "+ playerScore + " and Computer score is: " + computerScore);
        }

        else if (playerScore > computerScore) 
        {
            console.log("Player wins as Player score is: "+ playerScore + " and Computer score is " + computerScore);
        }



    }
    
}


                    }

// gameRounds();

game();


