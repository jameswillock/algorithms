const { filledArray } = require('./utilities');
const { shuffle, selectionSort, findSmallest } = require('./sorting');
const { binarySearch, stupidSearch } = require('./search');

// Create collection of 10000 integers
const sortNumbers = filledArray(1000),
      finalSortNumber = sortNumbers[sortNumbers.length - 1];

// Shuffled using `shuffle()`
console.time("shuffle()");
const shuffled = shuffle(sortNumbers);
console.timeEnd("shuffle()");

// Find smallest index
console.time("findSmallest()");
const smallestIndex = findSmallest(shuffled);
console.timeEnd("findSmallest()");
console.log("findSmallest returned", smallestIndex);

// Sort by value
console.time("selectionSort()");
const sorted = selectionSort(shuffled);
console.timeEnd("selectionSort()");

// Instantiate a million integers in an array
const searchNumbers = filledArray(1000000),
      finalSearchNumber = searchNumbers[searchNumbers.length - 1];

// Stupid search for member
console.time("stupidSearch()");
const stupidSearchIndex = stupidSearch(searchNumbers, finalSearchNumber);
console.timeEnd("stupidSearch()");
console.log("stupidSearch returned", stupidSearchIndex);

// Binary search for member
console.time("binarySearch()");
const binarySearchIndex = binarySearch(searchNumbers, finalSearchNumber);
console.timeEnd("binarySearch()");
console.log("binarySearch returned", binarySearchIndex);