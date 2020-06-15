const assert = require("assert");
const { filledArray } = require("../utilities");
const { binarySearch, stupidSearch } = require("../search");

const numbers = filledArray(1000),
  find = 500,
  missing = 1001;

describe("stupidSearch", () => {
  context("when member exists in collection", () => {
    it("should return the index of the item", () => {
      const index = stupidSearch(numbers, find);
      assert.equal(index, find);
    });
  });

  context("when member is missing from collection", () => {
    it("should return null", () => {
      const index = stupidSearch(numbers, missing);
      assert.equal(index, null);
    });
  });
});

describe("binarySearch", () => {
  context("when member exists in collection", () => {
    it("should return the index of the item", () => {
      const index = binarySearch(numbers, find);
      assert.equal(index, find);
    });
  });

  context("when member is missing from collection", () => {
    it("should return null", () => {
      const index = binarySearch(numbers, missing);
      assert.equal(index, null);
    });
  });
});
