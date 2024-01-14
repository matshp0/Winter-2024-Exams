// Split string by the first occurrence of separator

const parseIP = (ip) => {
  if (!ip) return;
  const digits = ip.split('.');
  if (digits.length !== 4) return;
  const result = [];
  for (let j = 0; j < digits.length; j++){
    result.push(parseInt(digits[j]));
    if (isNaN(result[j])) return ;
  }
  return result;
};

module.exports = parseIP;
