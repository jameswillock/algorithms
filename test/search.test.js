const assert = require('assert');
const { binarySearch, stupidSearch } = require('../search');

describe('stupidSearch', () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  context('when member exists in collection', () => {
    const find = numbers[numbers.length - 1];
    
    it('should return the index of the item', () => {
      const foundIndex = stupidSearch(numbers, find);
      assert.equal(foundIndex, numbers.length - 1);
    });
  });

  context('when member is missing from collection', () => {
    const find = 11;
    
    it('should return null', function() {
      const foundIndex = stupidSearch(numbers, find);
      assert.equal(foundIndex, null);
    });
  });
});

describe('binarySearch', () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  context('when member exists in collection', () => {
    const find = numbers[numbers.length - 1];
  
    it('should return the index of the item', () => {
      const foundIndex = binarySearch(numbers, find);
      assert.equal(foundIndex, numbers.length - 1);
    });
  });

  context('when member is missing from collection', () => {
    const find = 11;
    
    it('should return null', function() {
      const foundIndex = binarySearch(numbers, find);
      assert.equal(foundIndex, null);
    });
  });
});
