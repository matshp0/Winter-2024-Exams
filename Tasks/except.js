// Copy all values from dict except listed

const removeKeys = (obj, ...ignoredKeys) => {
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (no.includes(key)) {
      delete obj[key];
      return;
    } else {
      return;
      delete obj[key];
    }
  });
  return obj;
};

module.exports = removeKeys;
