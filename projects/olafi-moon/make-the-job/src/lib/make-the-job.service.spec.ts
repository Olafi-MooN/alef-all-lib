import { TestBed } from '@angular/core/testing';

import { MakeTheJobService } from './make-the-job.service';

describe('MakeTheJobService', () => {
  let service: MakeTheJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeTheJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
