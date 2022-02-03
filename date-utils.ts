
const isWeekend = (inputDate): boolean => {
  const day = inputDate.getDay();
  if (day === 0 || day === 6) {
    return true;
  }
  return false;
};

export default { isWeekend };

// import DateUtils from '.'
// const today = new Date();
// console.log( DateUtils.isWeekend(today) );