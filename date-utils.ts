
const isWeekend = (inputDate): boolean => {
  const day = inputDate.getDay();

  const days = { 0: true, 6: true }
  return days[day]
};

export default { isWeekend };

import DateUtils from '.'
const today = new Date();
console.log( DateUtils.isWeekend(today) );


// var isWeekend = yourDateObject.getDay()%6==0;
// var weekendArray = [true, false, false, false, false, true]
