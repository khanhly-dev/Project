import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormCreateComponent } from './user-form-create.component';

describe('UserFormCreateComponent', () => {
  let component: UserFormCreateComponent;
  let fixture: ComponentFixture<UserFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
