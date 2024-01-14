// Validate person name

const isName = (str) => {
  if (!str || typeof str !== 'string' || !str.includes(' '))
    return false;
  {
    for (const char of str) {
      if (char === ' ') continue;
      if (
        char.toLowerCase().charCodeAt(0) >= 97 &&
        char.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isName;
