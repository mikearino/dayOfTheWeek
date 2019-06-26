import { isNumber } from './../src/date-check.js';
import { dayFunc } from './../src/date-check.js';
import { dayName } from './../src/date-check.js';
import { display } from './../src/date-check.js';

 describe('isNumber', function () {

   it('should test whether the input is a number', function () {
     console.log(isNumber("hi"));
     let inputDate = "y";

     expect(isNumber(inputDate)).toEqual(false);

   });
 });

describe('dayFunc', function () {

   it('it should output a string of a day', function () {
     const inputDate = new Date('June 26, 2019');
     console.log(inputDate);
        expect(dayFunc(inputDate).toString()).toEqual("Wed Jun 26 2019 00:00:00 GMT-0700 (Pacific Daylight Time)");


     });
   });

   describe('display', function () {

      it('it should display a string', function () {
        const dayy = new Date('June 26, 2019')
        console.log(dayy);
        expect(display(dayy).toBe('on Wed Jun 26 2019 00:00:00 GMT-0700 (Pacific Daylight Time) The modern calendar day was: Wednesday.'));


        });
      });
    describe('dayName', function () {

       it('it should display a day of the week', function () {
         const date = new Date('June 26, 2019')
         expect(dayName(date)).toBe('Wednesday');


         });
       });
