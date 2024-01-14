// Validate person name

const isValidate = (T) => {
  if (!T || typeof T !== 'string' || !T.includes(' '))
    return false;
  {
    for (C of T) {
      if (C === ' ') continue;
      if (
        C.toLowerCase().charCodeAt(0) >= 97 &&
        C.toLowerCase().charCodeAt(0) <= 122
      ) {
      } else {
        return false;
      }
    }
    return true;
  }
};

module.exports = isValidate;
