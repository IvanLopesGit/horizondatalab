import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacaoCustoTempoComponent } from './relacao-custo-tempo.component';

describe('RelacaoCustoTempoComponent', () => {
  let component: RelacaoCustoTempoComponent;
  let fixture: ComponentFixture<RelacaoCustoTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelacaoCustoTempoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacaoCustoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
