import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMoney() {
    return element(by.css('#money')).getText();
  }

  getTime() {
    return element(by.css('#time')).getText();
  }

  getPatients() {
    return element(by.css('#patients')).getText();
  }

  changeDesiredPatients() {
    element(by.css('#desired-patients'))
      .sendKeys(Key.LEFT);
  }

  changePatientValue() {
    element(by.css('#patient-value'))
      .sendKeys(Key.RIGHT);
  }

  changeStartingPatients() {
    element(by.css('#starting-patients'))
      .sendKeys(Key.RIGHT);
  }
}
