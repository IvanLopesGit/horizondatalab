import { Component } from '@angular/core';

@Component({
  selector: 'app-despesas-por-categoria',
  templateUrl: './despesas-por-categoria.component.html',
  styleUrl: './despesas-por-categoria.component.scss'
})
export class DespesasPorCategoriaComponent {
  tableauUrl: string = "AnliseFinanceira-DespesaporCategoria/DespesasporCategoria";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnliseFinanceira-DespesaporCategoria/DespesasporCategoria/1.png";

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
