module.exports = (max) => {
  const store = [];
  const output = [];
  for (let i = 2; i <= max; ++i) {
    if (!store[i]) {
      output.push(i);
      for (let j = i << 1; j <= max; j += i) {
        store[j] = true;
      }
    }
  }
  return output;
};
