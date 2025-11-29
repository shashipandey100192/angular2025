import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerpage } from './headerpage';

describe('Headerpage', () => {
  let component: Headerpage;
  let fixture: ComponentFixture<Headerpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
