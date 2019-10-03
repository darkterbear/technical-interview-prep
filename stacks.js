const validBracketChain = function(s) {
	let stack = []
	for (let c of s.split('')) {
		switch (c) {
			case '}':
				if (stack.pop() !== '{') return false
				break
			case ']':
				if (stack.pop() !== '[') return false
				break
			case ')':
				if (stack.pop() !== '(') return false
				break
			default:
				stack.push(c)
				break
		}
	}

	return stack.length === 0
}

module.exports = {
	validBracketChain
}
