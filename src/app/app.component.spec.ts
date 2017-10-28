import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent, AppResultsComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppResultsComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have visitValue as 200`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.visitValue).toEqual(200);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#money').textContent).toEqual('$156,000');
    expect(compiled.querySelector('#time').textContent).toEqual('21 Months');
    expect(compiled.querySelector('#patients').textContent).toEqual('260 Patients');

    app.visitValue = 500;
    fixture.detectChanges();

    expect(compiled.querySelector('#money').textContent).toEqual('$390,000');
    expect(compiled.querySelector('#time').textContent).toEqual('21 Months');
    expect(compiled.querySelector('#patients').textContent).toEqual('260 Patients');
  }));
});
