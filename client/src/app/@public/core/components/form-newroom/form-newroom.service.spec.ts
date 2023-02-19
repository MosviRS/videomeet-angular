import { TestBed } from '@angular/core/testing';
import { FormNewroomService } from './form-newroom.service';

describe('FormNewroomService', () => {
  let service: FormNewroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormNewroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
