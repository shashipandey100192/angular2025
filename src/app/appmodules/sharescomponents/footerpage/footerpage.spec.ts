import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerpage } from './footerpage';

describe('Footerpage', () => {
  let component: Footerpage;
  let fixture: ComponentFixture<Footerpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footerpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
