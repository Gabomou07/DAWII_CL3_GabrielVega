import { TestBed } from '@angular/core/testing';

import { Api3menuService } from './api3menu.service';

describe('Api3menuService', () => {
  let service: Api3menuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api3menuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
