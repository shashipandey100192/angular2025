import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templateformpage } from './templateformpage';

describe('Templateformpage', () => {
  let component: Templateformpage;
  let fixture: ComponentFixture<Templateformpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templateformpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templateformpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
