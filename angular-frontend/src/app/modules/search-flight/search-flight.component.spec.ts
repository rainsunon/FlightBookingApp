import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightComponent } from './search-flight.component';

describe('DestinationsComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFlightComponent]
    });
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
