// Reverse dict, exchange keys and values

const reverseObject = (obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  }
  return obj;
};

module.exports = reverseObject;
