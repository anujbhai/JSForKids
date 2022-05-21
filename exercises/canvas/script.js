(function () {
"use strict";
	console.log("Everything's working fine!");

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	/* * * * * * * * * * * * * * * * * * * * * **
	 * Multiple canvas element created via loop *
	 * * * * * * * * * * * * * * * * * * * * * **/
	// for (var i = 0; i < 8; i++) {
	// 	ctx.fillRect(i * 10, i * 10, 10, 10);
	// }

	/* * * * * * **
	 * Simp robot *
	 * * * * * * **/
	// ctx.fillRect(75, 10, 50, 50);
	// ctx.fillRect(100 - 12.5, 60, 25, 25);
	// ctx.fillRect(60, 105, 80, 50);
	// ctx.fillRect(25, 85, 150, 25);
	// ctx.fillRect(60, 155, 25, 50);
	// ctx.fillRect(115, 155, 25, 50);

	/* * * * * * * *
	 * Fill styles *
	 * * * * * * * */
	// ctx.fillStyle = "#c5e1a5";
	// ctx.fillRect(0, 0, 50, 100);
	// ctx.fillStyle = "#73c6b6";
	// ctx.fillRect(50, 0, 50, 100);
	// ctx.fillStyle = "#6699FF";
	// ctx.fillRect(100, 0, 50, 100);

	/* * * * * * * * *
	 * Stroke styles *
	 * * * * * * * * */
	// ctx.strokeStyle = "#6699FF";
	// ctx.lineWidth = 4;
	// ctx.strokeRect(10, 10, 100, 20);

	/* * * * * * * * * * * **
	 * Drawing with strokes *
	 * * * * * * * * * * * **/
	// ctx.strokeStyle = "#6699FF";
	// ctx.lineWidth = 4;
	// ctx.beginPath();
	// ctx.moveTo(10, 10);
	// ctx.lineTo(60, 60);
	// ctx.moveTo(60, 10);
	// ctx.lineTo(10, 60);
	// ctx.stroke();

	/* * * * * * * * * * * * * * * **
	 * Drawing hangman with strokes *
	 * * * * * * * * * * * * * * * **/
	// ctx.lineWidth = 4;
	// /* Muur */
	// ctx.strokeRect(90, 10, 20, 20);

	// ctx.beginPath();
	// /* Gaa */
	// ctx.moveTo(100, 30);
	// ctx.lineTo(100, 90);
	// /* Bau Haat */
	// ctx.moveTo(100, 50);
	// ctx.lineTo(75, 40);
	// /* Xu Haat */
	// ctx.moveTo(100, 50);
	// ctx.lineTo(125, 40);
	// /* Bau bhori */
	// ctx.moveTo(100, 90);
	// ctx.lineTo(75, 125);
	// /* Xu bhori */
	// ctx.moveTo(100, 90);
	// ctx.lineTo(125, 125);
	// ctx.stroke();

	/* * * * *
	 * House *
	 * * * * */
	// ctx.fillStyle = "#6699FF";
	// ctx.beginPath();
	// ctx.moveTo(100, 100);
	// ctx.lineTo(100, 60);
	// ctx.lineTo(130, 30);
	// ctx.lineTo(160, 60);
	// ctx.lineTo(160, 60);
	// ctx.lineTo(160, 100);
	// ctx.lineTo(100, 100);
	// ctx.fill();

	/* * * * * * * * * **
	 * Arcs and circles *
	 * * * * * * * * * **/
	// ctx.lineWidth = 2;
	// ctx.strokeStyle = "#73c6b6";

	// ctx.beginPath();
	// ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(100, 50, 20, 0, Math.PI, false);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
	// ctx.stroke();

	/* * * * * * * * **
	 * Random circles *
	 * * * * * * * * **/
	// for (var i = 0; i < 10; i++) {
	// 	var countX = Math.floor(Math.random() * 200);
	// 	var countY = Math.floor(Math.random() * 200);
	// 	var countR = Math.floor(Math.random() * 20);

	// 	var r = Math.floor(Math.random() * 240);
	// 	var g = Math.floor(Math.random() * 190);
	// 	var b = Math.floor(Math.random() * 15);

	// 	ctx.beginPath();
	// 	ctx.arc(countX, countY, countR, 0, Math.PI * 2, false);
	// 	ctx.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", 1)";
	// 	ctx.fill();
	// }

	/* * * * * * * * * * * *
	 * Overlapping circles *
	 * * * * * * * * * * * */
	// var circle = function (x, y, r) {
	// 	ctx.beginPath();
	// 	ctx.arc(x, y, r, 0, Math.PI * 2, false);
	// 	ctx.stroke();
	// };

	// ctx.lineWidth = 4;

	// ctx.strokeStyle = "red";
	// circle(100, 100, 10);

	// ctx.strokeStyle = "orange";
	// circle(100, 100, 20);

	// ctx.strokeStyle = "Yellow";
	// circle(100, 100, 30);

	// ctx.strokeStyle = "Green";
	// circle(100, 100, 40);

	// ctx.strokeStyle = "Blue";
	// circle(100, 100, 50);

	// ctx.strokeStyle = "Purple";
	// circle(100, 100, 60);

	/* * * * * *
	 * Snowman *
	 * * * * * */
	var circle = function (x, y, r, fillCircle, fillColor) {
		ctx.beginPath();
		ctx.arc(x, y, r, 0, Math.PI * 2, false);

		if (!fillCircle) {
			ctx.lineWidth = 4;
			ctx.stroke();
		} else {
			ctx.fillStyle = fillColor;
			ctx.fill();
		}
	};

	circle(100, 60, 25, false);
	circle(90, 50, 5, true)
	circle(110, 50, 5, true)
	circle(100, 135, 50, false);
	circle(100, 115, 5, true)
	circle(100, 135, 5, true)
	circle(100, 155, 5, true)
	circle(100, 60, 5, true, "Orange")
}) ();
