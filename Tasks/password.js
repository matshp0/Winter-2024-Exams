// Generate random password

const generatePassword = (alphabet, length) => {
  const maxLength = alphabet.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxLength);
    result += alphabet[index];
  }
  return result;
};

module.exports = generatePassword;
