// Get day number

let DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDays = (s) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (s.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDays;
