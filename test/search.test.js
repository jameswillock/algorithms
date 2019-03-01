const assert = require('assert');
const { binarySearch, stupidSearch } = require('../search');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      find = 10,
      missing = 11;

describe('stupidSearch', () => {
  context('when member exists in collection', () => {
    it('should return the index of the item', () => {
      const index = stupidSearch(numbers, find);
      assert.equal(index, find);
    });
  });

  context('when member is missing from collection', () => {
    it('should return null', () => {
      const index = stupidSearch(numbers, missing);
      assert.equal(index, null);
    });
  });
});

describe('binarySearch', () => {
  context('when member exists in collection', () => {
    it('should return the index of the item', () => {
      const index = binarySearch(numbers, find);
      assert.equal(index, find);
    });
  });

  context('when member is missing from collection', () => {
    it('should return null', () => {
      const index = binarySearch(numbers, missing);
      assert.equal(index, null);
    });
  });
});
