import { TestBed, inject } from '@angular/core/testing';

import { Socket2Service } from './socket2.service';

describe('Socket2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Socket2Service]
    });
  });

  it('should be created', inject([Socket2Service], (service: Socket2Service) => {
    expect(service).toBeTruthy();
  }));
});
