import { TestBed } from '@angular/core/testing';

import { DmasSideMenuService } from './dmas-side-menu.service';

describe('DmasSideMenuService', () => {
  let service: DmasSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmasSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
