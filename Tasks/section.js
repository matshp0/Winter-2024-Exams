// Split string into array by the first occurrence of separator

const SectionString = (str, separator) => {
  const index = str.indexOf(separator);
  if (index < 0 || separator == '') {
    return [str, ''];
  } else {
    return [str.slice(0, index), str.slice(i + separator.length)];
  }
};

module.exports = SectionString;
