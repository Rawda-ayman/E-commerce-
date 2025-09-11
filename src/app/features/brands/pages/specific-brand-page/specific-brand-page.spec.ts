import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBrandPage } from './specific-brand-page';

describe('SpecificBrandPage', () => {
  let component: SpecificBrandPage;
  let fixture: ComponentFixture<SpecificBrandPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificBrandPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
