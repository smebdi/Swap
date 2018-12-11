import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomBeerComponent } from './add-custom-beer.component';

describe('AddCommentComponent', () => {
  let component: AddCustomBeerComponent;
  let fixture: ComponentFixture<AddCustomBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
