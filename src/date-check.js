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

export function getBaseDate(date) {
  let outputDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  return outputDate;
}

export function display(date, outputDate) {
  let outputDay = 'on ' + outputDate + ' The modern calendar day was: ' + date.getDay() + '.';
  $('#result').append(outputDay);
}
