const assert = require('assert');
const { filledArray } = require('../utilities');

describe('filledArray', () => {
  it('returns a filled collection of integers', () => {
    assert.deepEqual(filledArray(5), [0, 1, 2, 3, 4]);
  });
});
