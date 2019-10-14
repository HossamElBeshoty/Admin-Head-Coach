import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersBoxTeamComponent } from './players-box-team.component';

describe('PlayersBoxTeamComponent', () => {
  let component: PlayersBoxTeamComponent;
  let fixture: ComponentFixture<PlayersBoxTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersBoxTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersBoxTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
