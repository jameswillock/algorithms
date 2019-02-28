const { filledArray } = require('./utilities');

const numbers = filledArray(1000);

const { shuffle, selectionSort, findSmallest } = require('./sorting');

console.log(shuffle([3, 2, 1]));
console.log(selectionSort([56, 45, 76, 23, 1, 577]));
console.log(findSmallest([56, 4557, 43, 2235, 112, 3, 23]));

const { binarySearch, stupidSearch } = require('./search');

console.log(stupidSearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 5));

const { countdown } = require('./recursion');
console.log(typeof countdown(10));