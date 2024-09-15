import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPorRegiaoComponent } from './produto-por-regiao.component';

describe('ProdutoPorRegiaoComponent', () => {
  let component: ProdutoPorRegiaoComponent;
  let fixture: ComponentFixture<ProdutoPorRegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoPorRegiaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoPorRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
