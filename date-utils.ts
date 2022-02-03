
const isWeekend = (inputDate): boolean => {
  return inputDate.getDay() === 0 || inputDate.getDay() === 6;
};

export default { isWeekend };

// import DateUtils from '.'
// const today = new Date();
// console.log( DateUtils.isWeekend(today) );
