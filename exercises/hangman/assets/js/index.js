(function () {
"use strict";

var gameScreen = document.querySelector(".game_screen");
console.log(gameScreen);
var btnStartGame = document.getElementById("btn_start_game");
console.log("Button start: ", btnStartGame);
var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
];
var word = words[Math.floor(Math.random() * words.length)];
var answerArr = [];

for (var i = 0; i < word.length; i++) {
	answerArr[i] = "<div class=\"form_control\"><input disabled type=\"text\" value=\"\" /></div>";
}

var remainingLetters = word.length;

var runGame = function () {
	// Game logic
	while (remainingLetters > 0) {
		// Player progress display
		// alert(answerArr.join(" "));
		gameScreen.innerHTML = answerArr.join("");


		// Input from player
		var guess = prompt("Guess a letter, or click Cancel to stop playing.");

		if (guess === null) {
			break;
		} else if (guess.length !== 1) {
			alert("Please enter a single letter!");
		} else {
			// Update game state
			for (var i = 0; i < word.length; i++) {
				if (word[i] === guess) {
					answerArr[i] = guess;
					remainingLetters--;
				}
			}	
		}
	}

	// Update answer and remaining letters for each attempt
	alert(answerArr.join(" "));
	alert("Good job! The answer is: " + word);
}
document.addEventListener("click", function (e) {
	if (!e.target.matches("#btn_start_game")) {
		return;
	}

	e.preventDefault();
	runGame();
});

})();