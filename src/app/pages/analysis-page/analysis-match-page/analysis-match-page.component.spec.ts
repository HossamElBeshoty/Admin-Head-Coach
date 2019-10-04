import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMatchPageComponent } from './analysis-match-page.component';

describe('AnalysisMatchPageComponent', () => {
  let component: AnalysisMatchPageComponent;
  let fixture: ComponentFixture<AnalysisMatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMatchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
