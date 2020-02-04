import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsectionComponent } from './helpsection.component';

describe('HelpsectionComponent', () => {
  let component: HelpsectionComponent;
  let fixture: ComponentFixture<HelpsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
