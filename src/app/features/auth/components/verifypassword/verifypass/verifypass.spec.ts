import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifypass } from './verifypass';

describe('Verifypass', () => {
  let component: Verifypass;
  let fixture: ComponentFixture<Verifypass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verifypass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifypass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
