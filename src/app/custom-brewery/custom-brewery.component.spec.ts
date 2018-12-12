import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBreweryComponent } from './custom-brewery.component';

describe('CustomBrewery', () => {
  let component: CustomBreweryComponent;
  let fixture: ComponentFixture<CustomBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
