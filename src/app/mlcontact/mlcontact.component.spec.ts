import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlcontactComponent } from './mlcontact.component';

describe('MlcontactComponent', () => {
  let component: MlcontactComponent;
  let fixture: ComponentFixture<MlcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
