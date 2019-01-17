import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlcardexampleComponent } from './mlcardexample.component';

describe('MlcardexampleComponent', () => {
  let component: MlcardexampleComponent;
  let fixture: ComponentFixture<MlcardexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlcardexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlcardexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
