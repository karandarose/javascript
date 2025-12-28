const choices = ["rock", "paper", "scissors"];

const winsAgainst = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (playerChoice === computerChoice) {
    result = "Draw!";
  } else if (winsAgainst[playerChoice] === computerChoice) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById(
    "result"
  ).textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
