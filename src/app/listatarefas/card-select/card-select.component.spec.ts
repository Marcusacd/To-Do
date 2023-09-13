import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectComponent } from './card-select.component';

describe('CardSelectComponent', () => {
  let component: CardSelectComponent;
  let fixture: ComponentFixture<CardSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSelectComponent]
    });
    fixture = TestBed.createComponent(CardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
