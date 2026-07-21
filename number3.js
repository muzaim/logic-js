function sumEven(obj) {
	let total = 0;

	for (let key in obj) {
		if (typeof obj[key] === "number") {
			if (obj[key] % 2 === 0) {
				total += obj[key];
			}
		}

		if (typeof obj[key] === "object") {
			total += sumEven(obj[key]);
		}
	}

	return total;
}

const data = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: "yup",
		},
	},
};

console.log(sumEven(data));

module.exports = { sumEven };

