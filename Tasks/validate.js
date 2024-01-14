// Validate person name

const isName = (str) => {
  if (!str || typeof str !== 'string' || !str.includes(' '))
    return false;
  for (const char of str.replaceAll(' ', '')) {
    const charCode = char.toLowerCase().charCodeAt(0);
    if (!(charCode >= 97 && charCode <= 122))
      return false;
  }
    return true;
};

module.exports = isName;
