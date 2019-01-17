import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlfaqComponent } from './mlfaq.component';

describe('MlfaqComponent', () => {
  let component: MlfaqComponent;
  let fixture: ComponentFixture<MlfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
