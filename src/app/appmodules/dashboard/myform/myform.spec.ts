import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myform } from './myform';

describe('Myform', () => {
  let component: Myform;
  let fixture: ComponentFixture<Myform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
