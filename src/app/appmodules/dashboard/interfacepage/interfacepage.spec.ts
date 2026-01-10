import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interfacepage } from './interfacepage';

describe('Interfacepage', () => {
  let component: Interfacepage;
  let fixture: ComponentFixture<Interfacepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interfacepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interfacepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
