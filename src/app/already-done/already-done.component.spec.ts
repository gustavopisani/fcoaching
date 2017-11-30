import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyDoneComponent } from './already-done.component';

describe('AlreadyDoneComponent', () => {
  let component: AlreadyDoneComponent;
  let fixture: ComponentFixture<AlreadyDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
