import { TestBed } from '@angular/core/testing';

import { OlympicService } from './olympic.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

describe('OlympicService', () => {
  let service: OlympicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        Router,
        HttpClient
      ]
    })
    .compileComponents();;
    service = TestBed.inject(OlympicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
