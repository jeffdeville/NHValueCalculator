export class CalcService {
  monthRange: Array<number>;
  nhGrowthRate: number;
  organicGrowthRate: number;

  constructor(nhGrowthRate = 5, numMonths = 36, organicGrowthRate = 1) {
    this.nhGrowthRate = nhGrowthRate;
    this.monthRange = Array.from(new Array(36), (val, index) => index);
    this.organicGrowthRate = organicGrowthRate;
  }

  compute(patientValue: number,
          startingPatients: number,
          desiredPatients: number): any {
    this.assertValidInputs(patientValue, startingPatients, desiredPatients, this.organicGrowthRate);

    const withoutNH     = this.calcRange(startingPatients, desiredPatients, this.organicGrowthRate);
    const withNH        = this.calcRange(startingPatients, desiredPatients, (this.nhGrowthRate + this.organicGrowthRate));
    const deltaPatients = this.monthRange.map((i: number): number => withNH[i] - withoutNH[i]);

    const money = deltaPatients.reduce(
      (acc: number, numPatients: number): number => acc + numPatients * patientValue
    , 0);

    const patients = deltaPatients.reduce(
      (acc: number, numPatients: number): number => acc + numPatients
    , 0);

    const timeToBookedOutWith = (desiredPatients - startingPatients) / (this.organicGrowthRate + this.nhGrowthRate);
    const timeToBookedOutWithOut = (desiredPatients - startingPatients) / (this.organicGrowthRate);
    const time = Math.round(timeToBookedOutWithOut - timeToBookedOutWith);

    return {
      money: money,
      patients: patients,
      time: time
    };
  }

  private calcRange(
    startingPatients: number,
    desiredPatients: number,
    growthRate: number
  ): Array<number> {
    return this.monthRange.reduce((acc: Array<any>, month: number): Array<number> => {
      acc.push(Math.min(month * growthRate + startingPatients, desiredPatients));
      return acc;
    }, []);
  }

  private assertValidInputs(patientValue: number,
                            startingPatients: number,
                            desiredPatients: number,
                            growthRate: number): void {
    if (100 > patientValue || patientValue > 10000) {
      throw new Error('InvalidPatientValue - Must be between 100 - 10000');
    }

    if (startingPatients < 0) {
      throw new Error('You must be starting with a positive number of patients');
    }

    if (desiredPatients < 5) {
      throw new Error('You must be hoping for at least 5 patients / week');
    }

    if (desiredPatients <= startingPatients) {
      throw new Error('You must want more patients than you have currently!');
    }

    if (growthRate < 0) {
      throw new Error('If you\'re losing customers, you need to fix that before my service can help you');
    }


  }
}
