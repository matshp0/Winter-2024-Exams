// Split string by the first occurrence of separator

const parseIP = (ip) => {
  const result = [];
  if (ip === '') return;
  else {
    const digits = ip.split('.');
    if (digits.length != 4) return;
    j = 0;
    for (const b of digits) {
      result[j] = parseInt(b);
      if (isNaN(result[j])) return;
      j++;
    }
  }
  return result;
};

module.exports = parseIP;
