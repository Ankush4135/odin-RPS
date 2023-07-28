const elements = ["rock", "paper", "scissor"];
let playerWins = 0, computerWins = 0;
let playerSelection, computerSelection;

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const result = document.querySelector('#result')
const round = document.querySelector('#round')

const gameElements = [];

elements.forEach(element => {
  gameElements.push(document.querySelector(`#${element}`))
});

gameElements.forEach(element => {
  element.addEventListener(
    'click', () =>
    playRound(element.id))
})


function getComputerChoice() {
  let select = Math.floor(Math.random() * 3);
  let selectedElement = elements[select];
  return selectedElement;
};

function display(element) {
  if (element == "rock")
    return "✊"
  if (element == "paper")
    return "✋"
  if (element == "scissor")
    return "✌"
}

function declare(boolean) {
  let playerSelTxtCap = playerSelection.substr(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerSelTxtCap = computerSelection.substr(0, 1).toUpperCase() + computerSelection.slice(1).toLowerCase();

  if (boolean) {
    playerScore.textContent = (parseInt(round.textContent)) + 1
    playerWins += 1;
    result.textContent = `You Win! ${playerSelTxtCap} beats ${computerSelTxtCap}`;
  }
  else {
    computerWins += 1;
    result.textContent = `You Lose! ${computerSelTxtCap} beats ${playerSelTxtCap}`;
  }
};

function playRound(playerSelected) {
  round.textContent = (parseInt(round.textContent)) + 1;

  playerSelection = playerSelected;
  computerSelection = getComputerChoice();
  document.querySelector('#computerSelection').textContent = display(computerSelection);
  document.querySelector('#playerSelection').textContent = display(playerSelected);

  if (playerSelected != computerSelection) {
    if (playerSelected == "rock") {
      computerSelection == "paper" ? declare(0) : declare(1);
    }
    else if (playerSelected == "paper") {
      computerSelection == "rock" ? declare(0) : declare(1);
    }
    else if (playerSelected == "scissor") {
      computerSelection == "rock" ? declare(0) : declare(1);
    }
    else {
      result.textContent = "You selection is Invalid";
    }
  }
  else {
    result.textContent = "Draw"
  }

  updateScore();
  gameEnd();
};

function updateScore() {
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
}

function gameEnd() {
  if (playerWins >= 5 || computerWins >= 5) {
    if (playerWins > computerWins) {
      result.textContent = "You Win!!, Click Restart to play again"
    }
    else {
      result.textContent = "You Lose!!, Click Restart to play again"
    }
  }
}


document.querySelector('#restart').onclick = () => {
  round.textContent = 0;
  playerWins = 0;
  computerWins = 0;
  document.querySelector('#computerSelection').textContent = "❔";
  document.querySelector('#playerSelection').textContent = "❔";
  updateScore();
  result.textContent = "Play!";
}
