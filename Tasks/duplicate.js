// Return an array without duplicates

const duplicate = (array, n) => {
  if (n <= 0) return [];
  else {
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = array;
    }
    return result;
  }
};

module.exports = duplicate;
