import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbaButtonComponent } from './alba-button.component';

describe('AlbaButtonComponent', () => {
  let component: AlbaButtonComponent;
  let fixture: ComponentFixture<AlbaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
