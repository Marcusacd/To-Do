import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatarefasComponent } from './listatarefas.component';

describe('ListatarefasComponent', () => {
  let component: ListatarefasComponent;
  let fixture: ComponentFixture<ListatarefasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListatarefasComponent]
    });
    fixture = TestBed.createComponent(ListatarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
