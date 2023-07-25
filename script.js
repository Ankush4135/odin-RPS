const element = ["rock", "paper", "scissor"];
let playerWins = 0, computerWins = 0;
let playerSelection, computerSelection;

const rock = document.querySelector('#rock')

rock.addEventListener(
  'click', () => 
    console.log("rock")
)

function getComputerChoice() {
  let select = Math.floor(Math.random() * 3);
  let selectedElement = element[select]
  console.log(`---- Computer seleted the ${selectedElement} element`);
  return selectedElement;
};

function declare(boolean) {
  let playerSelTxtCap = playerSelection.substr(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerSelTxtCap = computerSelection.substr(0, 1).toUpperCase() + computerSelection.slice(1).toLowerCase();

  if (boolean) {
    playerWins +=1;
    console.log(`You Win! ${playerSelTxtCap} beats ${computerSelTxtCap}`);
  }
  else {
    computerWins +=1;
    console.log(`You Lose! ${computerSelTxtCap} beats ${playerSelTxtCap}`);
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection != computerSelection) {
    if (playerSelection == "rock") {
      computerSelection == "paper" ? declare(0) : declare(1);
    }
    else if (playerSelection == "paper") {
      computerSelection == "rock" ? declare(0) : declare(1);
    }
    else if (playerSelection == "scissor") {
      computerSelection == "rock" ? declare(0) : declare(1);
    }
    else {
      console.log("You selection is Invalid"); 
    }
  }
  else {
    console.log("Draw")
  }
};

for (let i = 0; i < 5; i++) {
  console.log("P : " + playerWins + "  C : " + computerWins);
	//playerSelection = prompt("Enter your selection (Rock ,Paper or Scissor) :").toLowerCase();
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
}

if (playerWins > computerWins) {
  console.log("You Win")
}
else {
  console.log("You Lose")
}