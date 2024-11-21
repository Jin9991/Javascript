'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secrectNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no input
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secrectNumber) {
    // When player is win
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('.number').textContent = secrectNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secrectNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secrectNumber) {
  //     // Guess is too high
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lose';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secrectNumber) {
  //     // Guess is too low
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lose';
  //       document.querySelector('.score').textContent = 0;
  //     }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.quesrySelecto('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
