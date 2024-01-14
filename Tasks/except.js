// Copy all values from dict except listed

const removeKeys = (obj, ...ignoredKeys) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (!ignoredKeys.includes(key))
      continue;
    delete obj[key];
    }
  return obj;
};

module.exports = removeKeys;
