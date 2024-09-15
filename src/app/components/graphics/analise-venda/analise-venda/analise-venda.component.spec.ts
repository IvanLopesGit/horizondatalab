import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseVendaComponent } from './analise-venda.component';

describe('AnaliseVendaComponent', () => {
  let component: AnaliseVendaComponent;
  let fixture: ComponentFixture<AnaliseVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnaliseVendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
