const filledArray = (total) =>
  Array(total)
    .fill()
    .map((_, index) => index);

module.exports = { filledArray };
