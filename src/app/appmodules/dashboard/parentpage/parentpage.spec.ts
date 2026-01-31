import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parentpage } from './parentpage';

describe('Parentpage', () => {
  let component: Parentpage;
  let fixture: ComponentFixture<Parentpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parentpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parentpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
