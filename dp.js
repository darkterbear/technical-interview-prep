// memoizing dictionary
const fib = {}

const fibonnaciDynamic = function(i) {
	if (i <= 1) return i // base case
	if (i in fib) return fib[i] // memoized case
	fib[i] = fibonnaciDynamic(i - 1) + fibonnaciDynamic(i - 2) // recursive case, storage in dict
	return fib[i]
}

module.exports = {
	fibonnaciDynamic
}
