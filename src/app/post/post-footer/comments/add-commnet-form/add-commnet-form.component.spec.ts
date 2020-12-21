import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommnetFormComponent } from './add-commnet-form.component';

describe('AddCommnetFormComponent', () => {
  let component: AddCommnetFormComponent;
  let fixture: ComponentFixture<AddCommnetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommnetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommnetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
