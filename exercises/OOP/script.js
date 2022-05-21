(function () {
"use strict";

	$(document).ready(function () {
		console.log("Everything's working fine!");

		var Car = function (x, y) {
			this.x = x;
			this.y = y;
		};

		// Assign a new draw method to car object's prototype property
		Car.prototype.draw = function () {
			var carHTML = "<img alt=\"\" src=\"./car.png\" />";
			this.carElement = $(carHTML); // Assign a new carElement property to car object

			this.carElement.css({
				position: 'absolute',
				left: this.x,
				top: this.y,
			});

			$("body").append(this.carElement);
		};

		Car.prototype.moveRight = function () {
			this.x += 5;

			this.carElement.css({
				left: this.x,
				top: this.y,
			});
		};

		Car.prototype.moveLeft = function () {
			this.x += -5;

			this.carElement.css({
				left: this.x,
				top: this.y,
			});
		};

		Car.prototype.moveUp = function () {
			this.y += -5;

			this.carElement.css({
				left: this.x,
				top: this.y,
			});
		};

		Car.prototype.moveDown = function () {
			this.y += 5;

			this.carElement.css({
				left: this.x,
				top: this.y,
			});
		};

		var tesla = new Car(10, 20);
		var nissan = new Car(100, 100);

		tesla.draw();
		nissan.draw();


		$(this).on("keydown", function (e) {
			switch (e.which) {
				case 37: 
					tesla.moveLeft();
					break;
				case 38:
					tesla.moveUp();
					break;
				case 39:
					tesla.moveRight();
					break;
				case 40:
					tesla.moveDown();
					break;
				default:
					break;
			}
		});

	});
}) ();
