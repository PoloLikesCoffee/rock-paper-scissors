//array that store rock paper and scissors
let play = ["Rock", "Paper", "Scissors"];

//function that return a random string from the array play
function computerPlay() {
    return play[Math.floor(Math.random() * play.length)];
    //use Math.random() with Math.floor() to return a 
    //random string from the length of the array play
    //so any of the three elements of the array
}

//the beginning will start with my input 
//(has to be case-insensitive) by using .toLowerCase()

//now the function playRound() will be called:
//if my rock vs paper, I lose
//if my rock vs scissors, I win
//if my rock vs rock, draw

//if my paper vs rock, I win
//if my paper vs scissors, I lose
//if my paper vs paper, draw

//if my scissors vs paper, I win
//if my scissors vs rock, I lose
//if my scissors vs scissors, draw
let playerWin = 0;//varaible that store the score of the player
let computerWin = 0;//varaible that store the score of the computer

//function that plays a single round of rock paper scissors
//takes two parameters
// - playerSelection : the input of the player
// - computerSelection : the output of the function computerPlay()
function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        //put the string of playerSelection in lower case to compare with rock
        console.log("You Lose! Paper beats Rock");
        computerWin++;//+1 for computer
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        
        console.log("You Win! Rock beats Scissors");
        playerWin++;//+1 for player
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        
        console.log("You Draw! Rock = Rock");
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        
        console.log("You Win! Paper beats Rock");
        playerWin++;//+1 for player
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        
        console.log("You Lose! Scissors beats Paper");
        computerWin++;//+1 for computer
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        
        console.log("You Draw! Paper = Paper");
        
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        
        console.log("You Lose! Rock beats Scissors");
        computerWin++;//+1 for computer
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        
        console.log("You Win! Scissors beats Paper");
        playerWin++;//+1 for player
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        
        console.log("You Draw! Scissors = Scissors");
        
    }
}

//the result of the function playRound() for one round
//alert(playRound(playerSelection, computerSelection)); 

//function that check the number of win of the player 
//and the computer, and compare the results
function whoWin(playerWin, computerWin) {
    if (playerWin > computerWin) {
        alert("You are a Champion!");
    } else if (playerWin === computerWin) {
        alert("It is a tie!");
    } else {
        alert("You are the Loser!");
    }
}
//function of the main game to play a 5 round game
function game() {
    let playerSelection;//variable where we get the input of the player
    let computerSelection;//variable where we store the output of the function computerPlay()

    //loop of 5 rounds
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What is your play?"); //the move of the player
        computerSelection = computerPlay(); //the variable call the function computerPlay()
        playRound(playerSelection, computerSelection);//start the function playRound for the first round
    }
}

//call the function game() to start to play
game();

//called this function to check the winner and
//return an alert with the winner
whoWin(playerWin, computerWin);