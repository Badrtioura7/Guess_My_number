//  'use strict';
// console.log(document.querySelector('.message').textContent);
// (document.querySelector('.message').textContent) = 'correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
document.querySelector('.check').addEventListener('click', function () {
const guess = Number(document.querySelector('.guess').value);
console.log( guess , typeof guess);
if(!guess){
  document.querySelector('.message').textContent = 'No number';
}

});
git push origin main 