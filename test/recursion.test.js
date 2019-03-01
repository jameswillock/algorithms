const assert = require('assert');
const { nonRecursiveLength, nonRecursiveSumArray, recursiveLength, recursiveSumArray } = require('../recursion');

let numbers = [];

beforeEach(() => numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

describe('recursiveLength', () => {
  context('when the collection is empty', () => {
    it('returns zero', () => {
      assert.equal(recursiveLength([]), 0);
    });  
  });

  context('when the collection is not empty', () => {
    it('returns the length of the collection', () => {
      assert.equal(recursiveLength(numbers), 11);
    });  
  });
});

describe('nonRecursiveLength', () => {
  context('when the collection is empty', () => {
    it('returns zero', () => {
      assert.equal(nonRecursiveLength([]), 0);
    });  
  });

  context('when the collection is not empty', () => {
    it('returns the length of the collection', () => {
      assert.equal(nonRecursiveLength(numbers), 11);
    });  
  });
});

describe('recursiveSumArray', () => {
  context('when the collection is empty', () => {
    it('returns zero', () => {
      assert.equal(recursiveSumArray([]), 0);
    });  
  });

  context('when the collection is not empty', () => {
    it('returns the sum of the collection', () => {
      assert.equal(recursiveSumArray(numbers), 55);
    });  
  });
});

describe('nonRecursiveSumArray', () => {
  context('when the collection is empty', () => {
    it('returns zero', () => {
      assert.equal(nonRecursiveSumArray([]), 0);
    });  
  });

  context('when the collection is not empty', () => {
    it('returns the sum of the collection', () => {
      assert.equal(nonRecursiveSumArray(numbers), 55);
    });  
  });
});
