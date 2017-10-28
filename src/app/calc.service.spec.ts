import { async } from '@angular/core/testing';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  const calcService = new CalcService(5, 36);
  const validVisitValue = 200;
  const validNumVisits = 2;
  const validStartingPatients = 10;
  const validDesiredPatients = 30;

  it('ensure visitValue is at least $100', async(() => {
    expect(() => calcService.compute(
      0, validVisitValue, validStartingPatients, validDesiredPatients))
    .toThrowError('InvalidVisitValue - Must be greater than $100');
  }));

  it('ensure numVisits is at least 1', async(() => {
    expect(() => calcService.compute(
      validVisitValue, 0, validStartingPatients, validDesiredPatients))
    .toThrowError('InvalidNumVisits - Must be at least 1!');
  }));

  it('ensure startingPatients is lower than desiredPatients', async(() => {
    expect(() => calcService.compute(
      validVisitValue, validNumVisits, 10, 5))
    .toThrowError('You must want more patients than you have currently!');
  }));

  it('ensure startingPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validVisitValue, validNumVisits, -1, validDesiredPatients))
    .toThrowError('You must be starting with a positive number of patients');
  }));

  it('ensure desiredPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validVisitValue, validNumVisits, validStartingPatients, 2))
    .toThrowError('You must be hoping for at least 5 patients / week');
  }));

  it('should compute money, patients, and time properly', async(() => {
    expect(calcService.compute(100, 3, 5, 20))
      .toEqual({
        money: 27900,
        patients: 93,
        time: 13
      });
  }));
});
