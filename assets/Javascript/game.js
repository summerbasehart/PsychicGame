var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

window.onload = function () {
    var comChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(comChoice);
    console.log(computerGuess[0]);

document.onkeyup = function(event) {
    var playerChoice = event.key;
    console.log(computerGuess[0]);
	if ((playerChoice === computerGuess[0]) && (guessesLeft > 0)) {
	    wins++;
	    guessesLeft = 9
	    lettersGuessed.length = 0;
	    computerGuess.length = 0;
	    var comChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	    computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	} else if ((playerChoice !== computerGuess[0]) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft-1;
	} else if ((playerChoice !== computerGuess[0]) && (guessesLeft = 0)) {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var comChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
	console.log(computerGuess[0]);
	}
}

var html = "<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Remaining: " + guessesLeft + "</p>" +
"<p>Guesses So Far: " + lettersGuessed + "</p>";

document.querySelector("#game").innerHTML = html;

}
