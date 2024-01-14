// Find an intersection of two dictionaries

const findIntersection = (object1, object2) => {
  const keys = Object.keys(object1);
  for (const key of keys)
    if (object1[key] !== object2[key])
      delete object1[key];
  return object1;
};

module.exports = findIntersection;
