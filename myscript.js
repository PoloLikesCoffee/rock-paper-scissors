//create a function that return randomly 
//either rock, paper or scissors

//maybe the function will return a string randomly from
//an array where I stored the three different options

let play = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return play[Math.floor(Math.random() * play.length)];
}

//create a function that plays a single round 
//of rock paper scissors
//function takes two parameters :
// - playerSelection
// - computerSelection
//then return a string that declares the winner

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
let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        
        console.log("You Lose! Paper beats Rock");
        computerWin++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        
        console.log("You Win! Rock beats Scissors");
        playerWin++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        
        console.log("You Draw! Rock = Rock");
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        
        console.log("You Win! Paper beats Rock");
        playerWin++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        
        console.log("You Lose! Scissors beats Paper");
        computerWin++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        
        console.log("You Draw! Paper = Paper");
        
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        
        console.log("You Lose! Rock beats Scissors");
        computerWin++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        
        console.log("You Win! Scissors beats Paper");
        playerWin++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        
        console.log("You Draw! Scissors = Scissors");
        
    }
}

//alert(playRound(playerSelection, computerSelection)); //the result of the function playRound()

//create a function game() and put playRound() inside
//play a 5 round game
//keep score and return the winner at the end

function whoWin(playerWin, computerWin) {
    if (playerWin > computerWin) {
        alert("You are a Champion!");
    } else if (playerWin === computerWin) {
        alert("It is a tie!");
    } else {
        alert("You are the Loser!");
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What is your play?"); //the move of the player
        computerSelection = computerPlay(); //the variable call the function computerPlay()
        playRound(playerSelection, computerSelection);
    }
}

game();
whoWin(playerWin, computerWin);