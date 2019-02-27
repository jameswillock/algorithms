// Make a change

// Create collection of integers from 0 to 99999
const numbers = Array(100000).fill().map((item, index) => index);

// Look for 99999 to simulate worst case searches
const search = numbers[numbers.length - 1];

// Stupid search will iterate through each element and return
// when it finds a match
// O(n) - linear time
const stupidSearch = (collection, item) => {
	for (let index = 0; index < collection.length; index++) {
		if (collection[index] === item) return index;
	}
};

// Binary search will operate on a sorted array and search
// through it more efficiently by halving the size of each
// search boundary on each loop
// O(log n) - logaritmic time
const binarySearch = (collection, item) => {
	// Set boundary as start and end of collection
	let low = 0,
		high = collection.length - 1;

	// Loop over potential candidates
	while (low <= high) {
		// Choose middle of collection as guess candidate
		let middle = Math.trunc((low + high) / 2),
			guess = collection[middle];
			
		// If the guess is out of bounds, we reached the end
		// and can return early
		if (typeof guess === 'undefined') return null;

		// If we guessed correctly, return index of guess
		if (guess === item) return middle;
		
		// If guess was larger than we're looking for,
		// then set high to be the first half of remaining
		if (guess > item) {
			high = middle - 1;
		} else {
		// If guess was too low, set low to be the latter half
		// of the remaining collection
			low = middle + 1;
		}
	}
	
	// We didn't find the item in the collection
	return null;
};

console.time("stupidSearch");
console.log("stupidSearch index:", stupidSearch(numbers, search));
console.timeEnd("stupidSearch");
console.time("binarySearch");
console.log("binarySearch index:", binarySearch(numbers, search));
console.timeEnd("binarySearch");

// Shuffle a new array by swapping random elements
// O(n) - linear time
const shuffle = collection => {
	// Clone collection so we don't modify in place
	const collectionClone = collection.slice(0);
	
	// Store current index (last element in collection),
	// a temporary value and random index
	let currentIndex = collectionClone.length,
		temporaryValue,
		randomIndex;
	
	// Loop for each index in the collection		
	while (currentIndex) {
		// Select a random index in the collection
		randomIndex = Math.floor(Math.random() * currentIndex);
		
		// Decrement the current index by one
		currentIndex -= 1;
		
		// Swap the current element and random elements
		temporaryValue = collectionClone[currentIndex];
		collectionClone[currentIndex] = collectionClone[randomIndex];
		collectionClone[randomIndex] = temporaryValue;
	}
	
	// Return the collection
	return collectionClone;
};

// Find the smallest member of a collection
// O(n) - linear time
const findSmallest = collection => {
	// Assume the smallest is the first element
	// cache value for comparison
	let smallestIndex = 0,
		smallest = collection[smallestIndex];

	// Iterate over collection
	collection.forEach((item, index) => {
		// If iterated item is smaller than last
		// smallest seen, cache that instead
		if (collection[index] < smallest) {
			smallestIndex = index;
			smallest = collection[index];
		}
	});
	
	// Return the smallest index
	return smallestIndex;
};

const shuffled = shuffle(numbers);
console.time("findSmallest");
console.log("findSmallest index:", findSmallest(shuffled));
console.timeEnd("findSmallest");

// Sort the collection by its smallest to largest
// Depends on `findSmallest()` to determine smallest member
// O(n) - linear time
const selectionSort = collection => {
	// Instantiate a new collection to hold the sorted values
	// Clone the original collection so we don't modify it
	const sorted = [],
		  collectionClone = collection.slice(0);
	
	// Loop whilst collectionClone still has contents
	while (collectionClone.length) {
		// Find the smallest item in the clone
		// Hold the index and value
		const smallestIndex = findSmallest(collectionClone),
			  smallest = collectionClone[smallestIndex];
		
		// Push the smallest value into the new collection
		sorted.push(smallest);
		
		// Trim the clone to remove the smallest value
		collectionClone.splice(smallestIndex, 1);
	}
	
	// Return the sorted collection
	return sorted;
};

const unsorted = [100,40,345,32,452,3456,576,54342243,234,546567234432,0,23132];

console.time("selectionSort");
console.log("selectionSort", selectionSort(unsorted).join(', '));
console.timeEnd("selectionSort");

// Recursion

// Simple countdown – print number to console until we reach zero
const countdown = (number) => {
	// Print current number to console
	console.log(number);
	
	// Return if zero, to prevent infinite loop
	if (number <= 0) return;
	
	// Recursion!
	countdown(number - 1);
};

countdown(10);