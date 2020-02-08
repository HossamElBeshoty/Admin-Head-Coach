import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisPageCountComponent } from './analysis-page-count.component';

describe('AnalysisPageCountComponent', () => {
  let component: AnalysisPageCountComponent;
  let fixture: ComponentFixture<AnalysisPageCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisPageCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisPageCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
