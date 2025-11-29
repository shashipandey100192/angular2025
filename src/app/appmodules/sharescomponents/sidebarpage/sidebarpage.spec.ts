import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarpage } from './sidebarpage';

describe('Sidebarpage', () => {
  let component: Sidebarpage;
  let fixture: ComponentFixture<Sidebarpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
