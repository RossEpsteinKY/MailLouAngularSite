import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlservicesComponent } from './mlservices.component';

describe('MlservicesComponent', () => {
  let component: MlservicesComponent;
  let fixture: ComponentFixture<MlservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
