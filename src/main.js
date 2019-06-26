
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { isNumber } from './date-check.js';
import { dayFunc } from './date-check.js';
// import { getBaseDate } from './date-check.js';
import { display } from './date-check.js';
import { dayName } from './date-check.js';

// import { Triangle } from './triangle.js';

$(document).ready(function () {
  $('#date-form').submit(function (event) {
    event.preventDefault();
    const date = dayFunc($('#date').val());
    console.log(date);
    if(isNumber(date)) {
      // const outputDate = getBaseDate(date)
      display(date)
    } else {
      $('#result').text('This is not a number');
    }
  });
});
