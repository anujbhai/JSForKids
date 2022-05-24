(function () {
"use strict";

console.log("Everything's working fine!");

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var blockSize = 10;
var blockWidth = width / blockSize;
var blockHeight = height / blockSize;

var score = 0;

var drawBorder = function () {
	ctx.fillStyle = "Gray";
	ctx.fillRect(0, 0, width, blockSize);
	ctx.fillRect(0, height - blockSize, width, blockSize);
	ctx.fillRect(0, 0, blockSize, height);
	ctx.fillRect(width - blockSize, 0, blockSize, height);
};

var drawScore = function () {
	ctx.textBaseline = "top";
	ctx.fillText("Hello World!", 50, 50);
}

var intervalId = setInterval(function () {
	ctx.clearRect(0, 0, width, height);
	drawScore();
	snake.move();
	snake.draw();
	apple.draw();
	drawBorder();
}, 100);

}) ();

