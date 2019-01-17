import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlhelplinksComponent } from './mlhelplinks.component';

describe('MlhelplinksComponent', () => {
  let component: MlhelplinksComponent;
  let fixture: ComponentFixture<MlhelplinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlhelplinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlhelplinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
