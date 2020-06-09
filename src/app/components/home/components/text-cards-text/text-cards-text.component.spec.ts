import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCardsTextComponent } from './text-cards-text.component';

describe('TextCardsTextComponent', () => {
  let component: TextCardsTextComponent;
  let fixture: ComponentFixture<TextCardsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCardsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCardsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
