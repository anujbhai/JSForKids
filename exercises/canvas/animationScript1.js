	(function () {
	"use strict";

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var size = 0;
	// var position = 0;

	setInterval(function () {
		ctx.clearRect(0, 0, 200, 200);
		// ctx.fillRect(position, 0, 20, 20);
		ctx.fillRect(0, 0, size, size);

		// position++;
		size++;

		// if (position > 200) {
		// 	position = 0;
		// }
		if (size > 200) {
			size = 0;
		}
	}, 30)

	}) ();
