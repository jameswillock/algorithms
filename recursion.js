// Recursion

// Simple countdown – print number to console until we reach zero
const countdown = (number) => {
	console.log(number);

	// Return if zero, to prevent infinite loop
	if (number <= 0) return;
	
	// Recursion!
	countdown(number - 1);
};

module.exports = { countdown };