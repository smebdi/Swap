import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBeerComponent } from './find-beer.component';

describe('FindBeerComponent', () => {
  let component: FindBeerComponent;
  let fixture: ComponentFixture<FindBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
