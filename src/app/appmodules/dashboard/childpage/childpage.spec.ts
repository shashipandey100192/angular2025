import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childpage } from './childpage';

describe('Childpage', () => {
  let component: Childpage;
  let fixture: ComponentFixture<Childpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
