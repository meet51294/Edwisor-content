import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionViewComponent } from './region-view.component';

describe('RegionViewComponent', () => {
  let component: RegionViewComponent;
  let fixture: ComponentFixture<RegionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
