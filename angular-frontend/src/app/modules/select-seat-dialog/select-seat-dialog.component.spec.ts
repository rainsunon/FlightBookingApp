import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatDialogComponent } from './select-seat-dialog.component';

describe('DialogOverviewExampleDialogComponent', () => {
  let component: SelectSeatDialogComponent;
  let fixture: ComponentFixture<SelectSeatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSeatDialogComponent]
    });
    fixture = TestBed.createComponent(SelectSeatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
