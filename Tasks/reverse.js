// Reverse dict, exchange keys and values

const reverseObject = (obj) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    obj[value] = key;
    delete obj[key];
  });
  return obj;
};

module.exports = reverseObject;
