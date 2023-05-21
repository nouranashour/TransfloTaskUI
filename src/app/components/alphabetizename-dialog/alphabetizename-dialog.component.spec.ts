import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetizenameDialogComponent } from './alphabetizename-dialog.component';

describe('AlphabetizenameDialogComponent', () => {
  let component: AlphabetizenameDialogComponent;
  let fixture: ComponentFixture<AlphabetizenameDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetizenameDialogComponent]
    });
    fixture = TestBed.createComponent(AlphabetizenameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
