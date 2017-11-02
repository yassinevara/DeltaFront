import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIndividuComponent } from './new-individu.component';

describe('NewIndividuComponent', () => {
  let component: NewIndividuComponent;
  let fixture: ComponentFixture<NewIndividuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIndividuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
