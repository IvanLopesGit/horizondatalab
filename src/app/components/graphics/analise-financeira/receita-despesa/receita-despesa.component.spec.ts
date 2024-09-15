import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDespesaComponent } from './receita-despesa.component';

describe('ReceitaDespesaComponent', () => {
  let component: ReceitaDespesaComponent;
  let fixture: ComponentFixture<ReceitaDespesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceitaDespesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
