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

// Returns the index of the smallest member of the collection
// O(n) - linear time
const findSmallest = collection => {
  // Assume the smallest is the first element
  // cache value for comparison
  let smallestIndex = 0,
      smallest = collection[smallestIndex];

  for (let index = 0; index < collection.length; index++) {
    // If iterated item is smaller than last
    // smallest seen, cache that instead
    if (collection[index] < smallest) {
      smallestIndex = index;
      smallest = collection[index];
    }
  }
  
  // Return the index of the smallest value
  return smallestIndex;
};

// Sort the collection by its smallest to largest
// Depends on `findSmallest()` to determine smallest member
// O(n x n)
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

const quickSort = collection => {
  // Base case: if collection is 0 or 1 in length,
  // it doesn't need to be sorted
  if (collection.length < 2) return collection;

  // Assume pivot is the first member
  // Hold collections for each member smaller or larger
  const pivot = collection[0],
        smaller = [],
        larger = [];

  // Iterate over collection, except first member
  for (let index = 1; index < collection.length; index++) {
    // If member is smaller than pivot, put into smaller
    if (collection[index] <= pivot) {
      smaller.push(collection[index]);
    // If member is larger, put into larger
    } else {
      larger.push(collection[index]);
    }
  }

  // Recursion – return the newly sorted collection
  return quickSort(smaller).concat(pivot, quickSort(larger));
};

module.exports = { findSmallest, selectionSort, shuffle, quickSort };
