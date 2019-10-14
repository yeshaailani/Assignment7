var rps = ['rock', 'paper','scissors'];
function game() {
    var playerChoice = getPlayerChoice();
    var cpuChoice = getCPUChoice();
    compare(playerChoice, cpuChoice);
  }

  function getPlayerChoice() {
    'use strict';
    var choice;
    do {
        var arg = window.prompt("rock, paper, or scissors?").toLowerCase();
    } while (rps.indexOf(arg) === -1)
    return arg;
}

function getCPUChoice() {
    'use strict';
    var rand = Math.floor(Math.random() * Math.floor(3));
    return rps[rand];
}

function compare(playerChoice,cpuChoice)
{
    if ((cpuChoice === 'rock' && playerChoice === 'paper') || (cpuChoice === 'paper' && playerChoice === 'sicssors') || (cpuChoice === 'sicssors' && playerChoice === 'rock')) {
        win(playerChoice, cpuChoice);
    } 
    else if(cpuChoice == playerChoice)
    {
        tie(playerChoice, cpuChoice);
    }
    else
    {
        lose(playerChoice, cpuChoice);
    }
}

function win(playerChoice, cpuChoice) {
    alert("Your choice is "+playerChoice+", computer choice is " +cpuChoice + " Win! ");
  }
  
  function lose(playerChoice, cpuChoice) {
    alert("Your choice is "+playerChoice+", computer choice is " +cpuChoice+ " Loose! ");
  }
  
  function tie(playerChoice, cpuChoice) {
    alert("Your choice is "+playerChoice+", computer choice is " +cpuChoice+ " Tie! ");
  }
  
game()
  