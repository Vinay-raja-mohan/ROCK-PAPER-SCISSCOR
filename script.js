let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  const winner = getWinner(userChoice, computerChoice);
  document.getElementById('winner').textContent = `Winner: ${winner}`;

  if (winner === 'You') {
    userScore++;
  } else if (winner === 'Computer') {
    computerScore++;
  }

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function getWinner(user, computer) {
  if (user === computer) return 'Draw';

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You';
  } else {
    return 'Computer';
  }
}
