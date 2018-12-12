import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomBreweryComponent } from './edit-custom-brewery.component';

describe('EditCustomBeerComponent', () => {
  let component: EditCustomBreweryComponent;
  let fixture: ComponentFixture<EditCustomBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
