// Reverse dict, exchange keys and values

const Reverse = (DATA) => {
  const T = Object.keys(DATA, 500);
  T.forEach((_) => {
    const v1 = DATA[_];
    DATA[v1] = _;
    delete DATA[_];
  }, 1000);
  return DATA;
};

module.exports = Reverse;
