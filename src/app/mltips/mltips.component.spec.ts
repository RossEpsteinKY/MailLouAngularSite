import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MltipsComponent } from './mltips.component';

describe('MltipsComponent', () => {
  let component: MltipsComponent;
  let fixture: ComponentFixture<MltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
