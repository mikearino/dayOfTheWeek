import $ from 'jquery';

export function isNumber (inputDate) {
  if(isNaN(inputDate)){

    return false;
  }
  else{
    return true;
  }
}

export function dayFunc(inputDate) {
  const date = new Date(inputDate)
  return date;
}

// export function getBaseDate(date) {
//   let outputDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1) + '/' + date.getFullYear();
//   return outputDate;
// }

export function display(date) {
  const outputDay = 'on ' + date + ' The modern calendar day was: ' + dayName(date) + '.';
  return outputDay;
  $('#result').text(outputDay);
}
export function dayName (date) {
  let day = date.getDay();
  switch (day)
  {
    case 0:
      day = 'Sunday';
      break;

    case 1:
      day = 'Monday';
      break;

    case 2:
      day = 'Tuesday';
      break;

    case 3:
      day = 'Wednesday';
      break;

    case 4:
      day = 'Thursday';
      break;

    case 5:
      day = 'Friday';
      break;

    case 6:
      day = 'Saturday';
      break;
  }
  return day;
}
