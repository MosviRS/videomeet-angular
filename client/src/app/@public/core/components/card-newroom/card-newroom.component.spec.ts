import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewroomComponent } from './card-newroom.component';

describe('CardNewroomComponent', () => {
  let component: CardNewroomComponent;
  let fixture: ComponentFixture<CardNewroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNewroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
