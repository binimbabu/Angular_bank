import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExampleComponent } from './ng-content-example.component';

describe('NgContentExampleComponent', () => {
  let component: NgContentExampleComponent;
  let fixture: ComponentFixture<NgContentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
