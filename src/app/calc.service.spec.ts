import { async } from '@angular/core/testing';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  const calcService = new CalcService(5, 36);
  const validPatientValue = 300;
  const validStartingPatients = 10;
  const validDesiredPatients = 30;

  it('ensure patientValue is between 100 and 10,000', async(() => {
    expect(() => calcService.compute(
      0, validStartingPatients, validDesiredPatients))
    .toThrowError('InvalidPatientValue - Must be between 100 - 10000');
  }));

  it('ensure startingPatients is lower than desiredPatients', async(() => {
    expect(() => calcService.compute(
      validPatientValue, 10, 5))
    .toThrowError('You must want more patients than you have currently!');
  }));

  it('ensure startingPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validPatientValue, -1, validDesiredPatients))
    .toThrowError('You must be starting with a positive number of patients');
  }));

  it('ensure desiredPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validPatientValue, validStartingPatients, 2))
    .toThrowError('You must be hoping for at least 5 patients / week');
  }));

  it('should compute money, patients, and time properly', async(() => {
    expect(calcService.compute(100, 5, 20))
      .toEqual({
        money: 2300,
        patients: 23,
        time: 3
      });
  }));
});
