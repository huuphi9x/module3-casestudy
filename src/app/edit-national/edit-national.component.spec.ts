import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNationalComponent } from './edit-national.component';

describe('EditNationalComponent', () => {
  let component: EditNationalComponent;
  let fixture: ComponentFixture<EditNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
