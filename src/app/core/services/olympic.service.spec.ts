import { TestBed } from '@angular/core/testing';

import { OlympicService } from './olympic.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OlympicService', () => {
  let service: OlympicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();;
    service = TestBed.inject(OlympicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
