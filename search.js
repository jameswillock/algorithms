// Stupid search will iterate through each element and return
// when it finds a match
// O(n) - linear time
const stupidSearch = (collection, item) => {
  for (let index = 0; index < collection.length; index++) {
    if (collection[index] === item) return index;
  }

  // We didn't find the item
  return null;
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
    if (typeof guess === "undefined") return null;

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

module.exports = { binarySearch, stupidSearch };
