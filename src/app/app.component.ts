import { Component, OnInit, OnChanges,
         SimpleChanges, Input, ViewChild
       } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-results',
  templateUrl: './app-results.component.html',
  styleUrls: ['./app-results.component.css']
})
export class AppResultsComponent implements OnChanges {
  @Input() visitValue: number;
  @Input() numVisits: number;
  @Input() startingPatients: number;
  @Input() desiredPatients: number;
  money: number;
  patients: number;
  time: number;

  ngOnChanges(changes: SimpleChanges) {
    const result = new CalcService().compute(
      this.visitValue, this.numVisits, this.startingPatients, this.desiredPatients
    );
    this.money = result.money;
    this.patients = result.patients;
    this.time = result.time;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visitValue = 200;
  numVisits = 3;
  startingPatients = 5;
  growthRate = 1;
  desiredPatients = 30;
  @ViewChild(AppResultsComponent) childView: AppResultsComponent;
}
