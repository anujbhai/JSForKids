(function () {
	function areArraysSame(a, b) {
		if (a.length !== b.length) {
			return false;
		}

		var result = Array.isArray(a) &&
									Array.isArray(b) &&
									a.every(function(val, index) {
										return val === b[index];
									});

		return result;
	}

	console.log("Are arrays same? - " + areArraysSame([1, 2, 3], [4, 5, 6]));
	console.log("Are arrays same? - " + areArraysSame([1, 2, 3], [1, 2, 3]));
	console.log("Are arrays same? - " + areArraysSame([1, 2, 3], [1, 2, 3, 4]));
})();