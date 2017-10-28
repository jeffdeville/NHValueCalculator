import { AppPage } from './app.po';

describe('angular-widget App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the initial default calculations, and update them when a slider is moved', () => {
    page.navigateTo();
    expect(page.getMoney()).toEqual('$156,000');
    expect(page.getTime()).toEqual('21 Months');
    expect(page.getPatients()).toEqual('260 Patients');
  });

  it('should update the calculations altering DesiredPatients', () => {
    page.navigateTo();
    page.changeDesiredPatients();
    expect(page.getMoney()).not.toEqual('$78,000');
    expect(page.getTime()).not.toEqual('21 Months');
    expect(page.getPatients()).not.toEqual('260 Patients');
  });

  it('should update the calculations altering StartingPatients', () => {
    page.navigateTo();
    page.changeStartingPatients();
    expect(page.getMoney()).not.toEqual('$78,000');
    expect(page.getTime()).not.toEqual('21 Months');
    expect(page.getPatients()).not.toEqual('260 Patients');
  });

  it('should update the calculations altering VisitValue', () => {
    page.navigateTo();
    page.changeVisitValue();
    expect(page.getMoney()).not.toEqual('$78,000');
    expect(page.getTime()).toEqual('21 Months');
    expect(page.getPatients()).toEqual('260 Patients');
  });

  it('should update the calculations altering NumVisits', () => {
    page.navigateTo();
    page.changeNumVisits();
    expect(page.getMoney()).not.toEqual('$78,000');
    expect(page.getTime()).toEqual('21 Months');
    expect(page.getPatients()).toEqual('260 Patients');
  });
});
