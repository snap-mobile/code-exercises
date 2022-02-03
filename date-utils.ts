
const isWeekend = (inputDate): boolean => {
  const weekendDays = [0, 6];
  const day = inputDate.getDay();

  return weekendDays.includes(day);
};

export default { isWeekend };

// import DateUtils from '.'
// const today = new Date();
// console.log( DateUtils.isWeekend(today) );