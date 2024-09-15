import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseTemporalComponent } from './analise-temporal.component';

describe('AnaliseTemporalComponent', () => {
  let component: AnaliseTemporalComponent;
  let fixture: ComponentFixture<AnaliseTemporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaliseTemporalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
