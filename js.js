

//a function that has an event listener for a click and produces an x, then immediately an event listener for a click that will produce o

var gameBoard;
const playerOne = "X";
const playerTwo = "0";


//variable with an array with win combos of each cell 
const winCombo = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]

// the below box variable stores a reference from html and dqsa selects each element that has class BOX
const box = document.querySelectorAll('.box');
startGame();

function startGame() {
  document.querySelector(".endGame")
  gameBoard = Array.from(Array(9).keys());
  for (var i= 0; i < box.length; i++) {
    box[i].innerText = '';
    box[i].addEventListener('click', turnClick, false)
}
// create an array above

//function that selects box and corresponding square in console log
}
function turnClick(square) {
  console.log(square.target.id)
}
//a function that declares the game over and shows the winner
function getWinner() {
let winner = winningMix
return winner

}

//a function that declares when there is a tie
//a function to count the number of wins and reset the game
//a function to clear to the game and start over
