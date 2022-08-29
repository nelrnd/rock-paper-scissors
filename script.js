const playButton = document.querySelector('button#play');
const score = document.querySelector('div#score');
const buttonsOption = document.querySelectorAll('button.playerOption');

let playerScore = 0, computerScore = 0;

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

function playRound(playerChoice, computerChoice) {
  const roundWinner = determineRoundWinner(playerChoice, computerChoice);

  displayRoundWinner(roundWinner, playerChoice, computerChoice);

  updateScore(roundWinner);

  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function determineRoundWinner(playerChoice, computerChoice) {
  let roundWinner = '';

  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      roundWinner = '';
    } else if (computerChoice === 'paper') {
      roundWinner = 'computer'
    } else {
      roundWinner = 'player'
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      roundWinner = 'player';
    } else if (computerChoice === 'paper') {
      roundWinner = '';
    } else {
      roundWinner = 'computer';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      roundWinner = 'computer';
    } else if (computerChoice === 'paper') {
      roundWinner = 'player';
    } else {
      roundWinner = '';
    }
  }

  return roundWinner;
}

function displayRoundWinner(roundWinner, playerChoice, computerChoice) {
  if (!roundWinner) {
    score.textContent = `You both chose ${playerChoice}, this is a draw`;
  } else if (roundWinner === 'player') {
    score.textContent = `You won! ${capitalize(playerChoice)} beats ${computerChoice}.`;
  } else if (roundWinner === 'computer') {
    score.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}.`
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function determineGameWinner() {
  return (playerScore > computerScore) ? 'player' : 'computer';
}

function displayGameWinner(gameWinner) {
  if (gameWinner === 'player') {
    score.innerHTML = `You won the game!<br>You scored ${playerScore} points<br>Computer scored ${computerScore} points`;
  } else if (gameWinner === 'computer') {
    score.innerHTML = `You lost the game!<br>You scored ${playerScore} points<br>Computer scored ${computerScore} points`;
  }
}

function updateScore(roundWinner) {
  switch (roundWinner) {
    case 'player':
      playerScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    case '':
      // there is no winner
      break;
  }
}

function startGame() {
  // Reset player and computer score
  playerScore = 0;
  computerScore = 0;
  score.textContent = '';

  // Hide intro text and play button
  playButton.classList.add('hidden');
  playButton.previousElementSibling.classList.add('hidden');

  // Display option buttons and score section
  score.classList.remove('hidden');
  document.querySelector('.playerOptions').classList.remove('hidden');
}

function endGame() {
  // Hide option buttons
  document.querySelector('.playerOptions').classList.add('hidden');
  
  // Show play button
  playButton.classList.remove('hidden');

  const gameWinner = determineGameWinner();
  displayGameWinner(gameWinner);
}

playButton.addEventListener('click', startGame);

buttonsOption.forEach(button => {
  button.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
  })
});