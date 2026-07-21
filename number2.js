function maxSubArray(arr, num) {
	let max = 0;

	for (let i = 0; i < num; i++) {
		max += arr[i];
	}

	let total = max;

	for (let i = num; i < arr.length; i++) {
		total = total - arr[i - num] + arr[i];

		if (total > max) {
			max = total;
		}
	}

	return max;
}

console.log(maxSubArray([100, 200, 300, 400], 2));
console.log(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArray([-3, 4, 0, -2, 6, -1], 2));

module.exports = { maxSubArray };

