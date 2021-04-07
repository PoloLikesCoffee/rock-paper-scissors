const title = document.createElement('h1');
title.setAttribute('style', 'display: flex; justify-content: center;');
title.textContent = 'Let\'s play Rock Paper Scissors!!!';
document.body.appendChild(title);

const mainButton = document.createElement('div');
mainButton.setAttribute('style', 'display: flex; justify-content: space-around;');
document.body.appendChild(mainButton);

const rock = document.createElement('BUTTON');
rock.textContent = 'ROCK';
mainButton.appendChild(rock); 
rock.addEventListener('click', () => {
    let playerSelection ='rock';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    whoWin(playerWin, computerWin);
});

const paper = document.createElement('BUTTON');
paper.textContent = 'PAPER';
mainButton.appendChild(paper); 
paper.addEventListener('click', () => {
    let playerSelection ='paper';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    whoWin(playerWin, computerWin);
});

const scissors = document.createElement('BUTTON');
scissors.textContent = 'SCISSORS';
mainButton.appendChild(scissors); 
scissors.addEventListener('click', () => {
    let playerSelection ='scissors';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    whoWin(playerWin, computerWin);
});

const div = document.createElement('div');
div.setAttribute('style', 'display: flex; flex-direction: column; align-items: center;');
const title2 = document.createElement('h2');
title2.textContent = 'The running score : ';
div.appendChild(title2);
const p = document.createElement('p');
p.setAttribute('style', 'white-space: pre;');
div.appendChild(p);
document.body.appendChild(div);

let play = ["Rock", "Paper", "Scissors"];

function computerPlay() {
      return play[Math.floor(Math.random() * play.length)];
}

let playerWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        
        computerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Lose! Paper beats Rock\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        
        playerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Win! Rock beats Scissors\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        p.textContent += playerWin + ' - ' + computerWin + ' You Draw! Rock = Rock\r\n';
        div.appendChild(p);
        
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        
        playerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Win! Paper beats Rock\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        
        computerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Lose! Scissors beat Paper\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        p.textContent += playerWin + ' - ' + computerWin + ' You Draw! Paper = Paper\r\n';
        div.appendChild(p);
        
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        
        computerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Lose! Rock beats Scissors\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        
        playerWin++;
        p.textContent += playerWin + ' - ' + computerWin + ' You Win! Scissors beat Paper\r\n';
        div.appendChild(p);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        p.textContent += playerWin + ' - ' + computerWin + ' You Draw! Scissors = Scissors\r\n';
        div.appendChild(p);
        
    }
}

function whoWin(playerWin, computerWin) {
    if (playerWin >= 5) {

        const btns = document.querySelectorAll('BUTTON');
        btns.forEach((button) => {
            button.disabled = true;
        });

        document.onload = setTimeout(function () { 
            const div2 = document.createElement('div');
            div2.setAttribute('style', 'color: blue; font-size: 20px;');
            div2.textContent +="You are a Champion!";
            div.appendChild(div2);
            //alert("You are a Champion!");
            const restart = document.createElement('BUTTON');
            restart.textContent = 'RESTART';
            div.appendChild(restart); 
            restart.addEventListener('click', () => {
                location.reload();
            });
        }, 500);

    } else if (computerWin >= 5) {

        const btns = document.querySelectorAll('BUTTON');
        btns.forEach((button) => {
            button.disabled = true;
        });

        document.onload = setTimeout(function () { 
            const div2 = document.createElement('div');
            div2.setAttribute('style', 'color: red; font-size: 20px;');
            div2.textContent +="Game Over!!";
            div.appendChild(div2);
            //alert("Game Over!!");
            const restart = document.createElement('BUTTON');
            restart.textContent = 'RESTART';
            div.appendChild(restart); 
            restart.addEventListener('click', () => {
                location.reload();
            });
        }, 500);
    } 
}