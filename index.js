const { filledArray } = require('./utilities');
const { shuffle, selectionSort, findSmallest } = require('./sorting');
const { binarySearch, stupidSearch } = require('./search');

// Create collection of 10000 integers
const numbers = filledArray(1000),
	  finalNunber = numbers[numbers.length - 1];

// Shuffled using `shuffle()`
console.time("shuffle()");
const shuffled = shuffle(numbers);
console.timeEnd("shuffle()");

// Find smallest index
console.time("findSmallest()");
const smallestIndex = findSmallest(shuffled);
console.timeEnd("findSmallest()");

// Sort by value
console.time("selectionSort()");
const sorted = selectionSort(shuffled);
console.timeEnd("selectionSort()");

// Stupid search for member
console.time("stupidSearch()");
const stupidSearchIndex = stupidSearch(numbers, finalNumber);
console.timeEnd("stupidSearch()");

// Binary search for member
console.time("binarySearch()");
const binarySearchIndex = stupidSearch(numbers, finalNumber);
console.timeEnd("binarySearch()");