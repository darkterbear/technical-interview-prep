const fibonnaci = function(i) {
	if (i <= 1) return i // base case
	return fibonnaci(i - 1) + fibonnaci(i - 2) // tree recursive case
}

const factorial = function(i) {
	if (i <= 1) return 1 // base case
	return i * factorial(i - 1) // recursive case
}

module.exports = {
	fibonnaci,
	factorial
}
