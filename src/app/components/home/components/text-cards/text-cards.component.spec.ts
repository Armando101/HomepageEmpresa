import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardsComponent } from './text-cards.component';

describe('TextCardsComponent', () => {
  let component: TextCardsComponent;
  let fixture: ComponentFixture<TextCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
