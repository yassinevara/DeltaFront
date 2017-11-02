import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndividuComponent } from './edit-individu.component';

describe('EditIndividuComponent', () => {
  let component: EditIndividuComponent;
  let fixture: ComponentFixture<EditIndividuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIndividuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
