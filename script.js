// DESC :
// User plays rock paper scissors with computer

// ALGORITHM :
// Party starts
// Users is asked to choose between rock paper and scissors
// Computer randomly generate a choice between rock paper and scissors
// Function determines if user has won, or if computer has won, or if there is a draw
// Depending on the result, display win, loss, or draw
// Ask if user want to start again
// If yes, another party starts
// If no, game ends

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
  }

  return computerChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt('Choose between rock, paper, and scissors :');

  playerChoice = playerChoice.trim();
  playerChoice = playerChoice.toLowerCase();

  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  let result = '';

  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      result = 'You both chose rock, this is a draw.';
    } else if (computerChoice === 'paper') {
      result = 'You lose! Paper beats rock.';
    } else {
      result = 'You win! Rock beats scissors.';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You won! Paper beats rock.'
    } else if (computerChoice === 'paper') {
      result = 'You both chose paper, this is a draw.';
    } else {
      result = 'You lose! Scissors beats paper.';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = 'You lose! Rock beats scissors.'
    } else if (computerChoice === 'paper') {
      result = 'You won! Scissors beats paper.'
    } else {
      result = 'You both chose scissors, this is a draw.';
    }
  } else {
    console.log(playerChoice + ' is not a valid value.');
  }

  return result;
}

function selectWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'Game is finished. You won the game!';
  } else if (playerScore < computerScore) {
    return 'Game is finished. You lose the game!';
  } else {
    return 'Game is finished. Nobody won, this is a draw.'
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    const roundResult = playRound(playerChoice, computerChoice);
    alert(roundResult);

    if (roundResult.includes('won')) {
      playerScore++;
    } else if (roundResult.includes('lose')) {
      computerScore++;
    }
  }

  alert(selectWinner(playerScore, computerScore));
}

game();