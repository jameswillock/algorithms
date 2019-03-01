const assert = require('assert');
const { quickSort } = require('../sorting');

describe('quickSort', () => {
  const numbers = [4, 7, 2, 4, 10, 7, 3, 2, 5, 7];

  it('returns the ordered collection', () => {
    const sorted = quickSort(numbers);
    assert.deepEqual(
      sorted,
      [2, 2, 3, 4, 4, 5, 7, 7, 7, 10]
    );
  })
});
