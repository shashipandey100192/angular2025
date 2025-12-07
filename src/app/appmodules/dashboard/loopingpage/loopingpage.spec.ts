import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loopingpage } from './loopingpage';

describe('Loopingpage', () => {
  let component: Loopingpage;
  let fixture: ComponentFixture<Loopingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loopingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loopingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
