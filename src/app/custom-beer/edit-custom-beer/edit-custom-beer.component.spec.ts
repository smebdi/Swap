import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomBeerComponent } from './edit-custom-beer.component';

describe('EditCustomBeerComponent', () => {
  let component: EditCustomBeerComponent;
  let fixture: ComponentFixture<EditCustomBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCustomBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
