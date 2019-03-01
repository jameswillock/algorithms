const assert = require('assert');
const { findSmallest, selectionSort, shuffle, quickSort } = require('../sorting');

const numbers = [4, 7, 2, 4, 10, 7, 3, 2, 5, 7];
const sorted = [2, 2, 3, 4, 4, 5, 7, 7, 7, 10];

describe('selectionSort', () => {
  it('returns the ordered collection', () => {
    assert.deepEqual(selectionSort(numbers), sorted);
  });
});

describe('quickSort', () => {
  it('returns the ordered collection', () => {
    assert.deepEqual(quickSort(numbers), sorted);
  });
});

describe('findSmallest', () => {
  it('returns the index of the smallest value', () => {
    assert.equal(findSmallest(numbers), 2);
  });
});

describe('shuffle', () => {
  it('randomly shuffled the members of the collection', () => {
    assert.notDeepEqual(shuffle(numbers), numbers);
  });
});
