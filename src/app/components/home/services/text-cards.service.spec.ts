import { TestBed } from '@angular/core/testing';

import { TextCardsService } from './text-cards.service';

describe('TextCardsService', () => {
  let service: TextCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
