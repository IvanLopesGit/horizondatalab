import { Component } from '@angular/core';

@Component({
  selector: 'app-receita-despesa',
  templateUrl: './receita-despesa.component.html',
  styleUrl: './receita-despesa.component.scss'
})
export class ReceitaDespesaComponent {
  tableauUrl: string = "AnliseFinanceira-ReceitavsDespesaaoLongodoTempo/ReceitavsDespesaaoLongodoTempo";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnliseFinanceira-ReceitavsDespesaaoLongodoTempoReceitavsDespesaaoLongodoTempo/1.png";

  ngAfterViewInit() {
    this.loadTableauViz();
  }

  loadTableauViz() {
    const divElement = document.getElementById('vizContainer');
    const vizElement = divElement?.getElementsByTagName('object')[0];

    if (vizElement) {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }
}
