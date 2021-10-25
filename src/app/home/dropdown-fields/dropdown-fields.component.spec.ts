import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFieldsComponent } from './dropdown-fields.component';

describe('DropdownFieldsComponent', () => {
  let component: DropdownFieldsComponent;
  let fixture: ComponentFixture<DropdownFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
