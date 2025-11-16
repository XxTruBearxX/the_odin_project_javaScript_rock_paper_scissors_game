//a simple game of rock, paper, scissors

//establish player and computer scores
let humanScore = 0;
let computerScore = 0;

//create function to get computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//create function to get player choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  if (!choice) return getHumanChoice();

  choice = choice.toLowerCase();

  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Enter rock, paper, or scissors:")
      .toLowerCase();
  }

  return choice;
}

//create function to play a round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Its a tie!";
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

//create function to update scores and display results
function updateScores() {
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

//declare winner when a score reaches 5
function checkWinner() {
  if (humanScore === 5) {
    console.log('Congratulations! You are the overall winner!');
  }
  else if (computerScore === 5) {
    console.log('Computer is the overall winner! Better luck next time.');
  }
}

//main game function
function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection));
    updateScores();
  }
  checkWinner();
}

playGame();

//end game.