import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNationalComponent } from './create-national.component';

describe('CreateNationalComponent', () => {
  let component: CreateNationalComponent;
  let fixture: ComponentFixture<CreateNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
