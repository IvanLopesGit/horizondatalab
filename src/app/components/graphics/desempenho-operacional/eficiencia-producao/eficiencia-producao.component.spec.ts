import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EficienciaProducaoComponent } from './eficiencia-producao.component';

describe('EficienciaProducaoComponent', () => {
  let component: EficienciaProducaoComponent;
  let fixture: ComponentFixture<EficienciaProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EficienciaProducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EficienciaProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
