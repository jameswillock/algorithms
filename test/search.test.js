const assert = require('assert');
const { binarySearch, stupidSearch } = require('../search');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      find = numbers[numbers.length - 1],
      missing = 11;

describe('stupidSearch', () => {
  context('when member exists in collection', () => {
    it('should return the index of the item', () => {
      const foundIndex = stupidSearch(numbers, find);
      assert.equal(foundIndex, find);
    });
  });

  context('when member is missing from collection', () => {
    it('should return null', function() {
      const foundIndex = stupidSearch(numbers, missing);
      assert.equal(foundIndex, null);
    });
  });
});

describe('binarySearch', () => {
  context('when member exists in collection', () => {
    it('should return the index of the item', () => {
      const foundIndex = binarySearch(numbers, find);
      assert.equal(foundIndex, find);
    });
  });

  context('when member is missing from collection', () => {
    it('should return null', function() {
      const foundIndex = binarySearch(numbers, missing);
      assert.equal(foundIndex, null);
    });
  });
});
