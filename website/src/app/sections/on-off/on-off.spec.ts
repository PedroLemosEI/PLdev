import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOff } from './on-off';

describe('OnOff', () => {
  let component: OnOff;
  let fixture: ComponentFixture<OnOff>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnOff]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnOff);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
