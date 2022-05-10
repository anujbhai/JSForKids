(function () {
"use strict";

var startButton = document.getElementById("btn_start_game");

startButton.addEventListener("click", function (e) {
	e.preventDefault();
	startGame();
});

function startGame() {

	// Create an array of words
	var words = [
		"javascript",
		"monkey",
		"amazing",
		"pancake"
	];

	// Pick a random word
	var pickWord = function() {
		return words[Math.floor(Math.random() * words.length)];
	};

	// Setup the answer array
	var setupAnswerArray = function(word) {
		for (var i = 0; i < word.length; i++) {
			// @TODO answerArray is undefined
			answerArray[i] = "_";
		}
	};

	// Show player's progress
	var showPlayerProgress = function(anwerArray) {
		alert(answerArray.join(" "));
	};

	// Player's guess
	var getGuess = function() {
		prompt("Guess a letter, or click cancel to stop playing.");
	}

	// Update game state with the guess
	var updateGameState = function(guess, word, answerArray) {
		// Update answerArray and return a number showing how many
		// times the guess appears in the word so remainingLetters
		// can be updated
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
	};

	// Show the answer and congratulate the player
	var showAnswerAndCongratulatePlayer = function (answerArray) {
		// Use alert to show the answer and congratulate the player
		alert(answerArray.join(" "));
		alert("Good job! The answer is " + word);
	};

	var word = pickWord();
	var answerArray = setupAnswerArray(word);
	var remainingLetters = word.length;

	// The game loop
	while (remainingLetters > 0) {
		showPlayerProgress(answerArray);

		var guess = getGuess()

		if (guess === null) {
			// Exit game loop
			break;
		} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
		} else {
			var correctGuesses = updateGameState(guess, word, answerArray);
			remainingLetters = correctGuesses;
		}
	}
	showAnswerAndCongratulatePlayer(answerArray);
}
})();