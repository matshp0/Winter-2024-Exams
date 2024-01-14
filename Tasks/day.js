// Get day number

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDays = (str) => {
  for (let i = 0; i < DAYS.length; i++)
    if (str.startsWith(DAYS[i]))
      return i + 1;
  return -1;
};

module.exports = parseDays;
