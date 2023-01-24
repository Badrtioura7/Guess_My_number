//  'use strict';
// console.log(document.querySelector('.message').textContent);
// (document.querySelector('.message').textContent) = 'correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// 

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if(score>0){
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber;
    if(score>=highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  
    if (score === 0 ) {
      document.querySelector('.message').textContent = 'You lost!';}
  }
  else if(guess < secretNumber){
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  
    if (score === 0 ) {
      document.querySelector('.message').textContent = 'You lost!';}
}
}});
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  
  
  
  
  
  }
  
  
  
  
  );