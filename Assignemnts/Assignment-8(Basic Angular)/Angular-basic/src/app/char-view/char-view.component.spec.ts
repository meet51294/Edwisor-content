import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharViewComponent } from './char-view.component';

describe('CharViewComponent', () => {
  let component: CharViewComponent;
  let fixture: ComponentFixture<CharViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
