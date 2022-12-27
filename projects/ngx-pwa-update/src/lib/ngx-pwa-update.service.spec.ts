import { TestBed } from '@angular/core/testing';

import { NgxPwaUpdateService } from './ngx-pwa-update.service';

describe('NgxPwaUpdateService', () => {
  let service: NgxPwaUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPwaUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
