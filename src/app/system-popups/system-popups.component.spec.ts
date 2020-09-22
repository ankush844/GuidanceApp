import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPopupsComponent } from './system-popups.component';

describe('SystemPopupsComponent', () => {
  let component: SystemPopupsComponent;
  let fixture: ComponentFixture<SystemPopupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPopupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPopupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
