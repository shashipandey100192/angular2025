import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registor } from './registor';

describe('Registor', () => {
  let component: Registor;
  let fixture: ComponentFixture<Registor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
