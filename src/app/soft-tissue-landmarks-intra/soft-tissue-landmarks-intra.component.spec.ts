import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftTissueLandmarksIntraComponent } from './soft-tissue-landmarks-intra.component';

describe('SoftTissueLandmarksIntraComponent', () => {
  let component: SoftTissueLandmarksIntraComponent;
  let fixture: ComponentFixture<SoftTissueLandmarksIntraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftTissueLandmarksIntraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftTissueLandmarksIntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
