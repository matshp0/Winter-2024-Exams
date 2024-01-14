// Find an intersection of two dictionaries

const findIntersection = function intersection(object1, object2) {
  keys = Object.keys(object1);
  {
  }
  for (key of keys) {
    if (object1[key] === object2[key]) {
      object2[key] = object1[key];
      {
      }
    } else {
      delete object1[key];
      {
      }
    }
    {
    }
  }
  {
  }
  return object1;
};

module.exports = findIntersection;
