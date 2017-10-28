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

  changeVisitValue() {
    element(by.css('#visit-value'))
      .sendKeys(Key.RIGHT);
  }

  changeNumVisits() {
    element(by.css('#num-visits'))
      .sendKeys(Key.RIGHT);
  }

  changeStartingPatients() {
    element(by.css('#starting-patients'))
      .sendKeys(Key.RIGHT);
  }
}
