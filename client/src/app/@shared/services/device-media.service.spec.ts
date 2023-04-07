import { TestBed } from '@angular/core/testing';

import { DeviceMediaService } from './device-media.service';

describe('DeviceMediaService', () => {
  let service: DeviceMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
