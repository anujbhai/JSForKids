(function () {
"use string";

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

var btn = document.getElementById("btn");
var root = document.getElementById("root");

var generateRandomInsult = function() {
  var pickRandomWords = function (words) {
    return words[Math.floor(Math.random() * words.length)];
  };

  // Join all random string into a sentence
  var randomString;

	randomString = "Your " + pickRandomWords(randomBodyParts) + " is like a " + pickRandomWords(randomAdjectives) + " " + pickRandomWords(randomWords);
	root.innerHTML = "<p>" + randomString + "</p>";
};



btn.addEventListener("click", function () {
	generateRandomInsult();
});

}) ();