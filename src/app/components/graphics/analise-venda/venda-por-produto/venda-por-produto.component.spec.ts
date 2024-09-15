import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaPorProdutoComponent } from './venda-por-produto.component';

describe('VendaPorProdutoComponent', () => {
  let component: VendaPorProdutoComponent;
  let fixture: ComponentFixture<VendaPorProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendaPorProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendaPorProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
