import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewroomComponent } from './form-newroom.component';

describe('FormNewroomComponent', () => {
  let component: FormNewroomComponent;
  let fixture: ComponentFixture<FormNewroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
