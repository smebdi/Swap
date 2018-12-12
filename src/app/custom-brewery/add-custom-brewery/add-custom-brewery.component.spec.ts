import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomBreweryComponent } from './add-custom-brewery.component';

describe('AddCommentComponent', () => {
  let component: AddCustomBreweryComponent;
  let fixture: ComponentFixture<AddCustomBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
