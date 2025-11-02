import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpange } from './landingpange';

describe('Landingpange', () => {
  let component: Landingpange;
  let fixture: ComponentFixture<Landingpange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
