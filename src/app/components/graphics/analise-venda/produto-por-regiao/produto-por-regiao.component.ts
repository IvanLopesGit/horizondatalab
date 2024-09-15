import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-por-regiao',
  templateUrl: './produto-por-regiao.component.html',
  styleUrl: './produto-por-regiao.component.scss'
})
export class ProdutoPorRegiaoComponent {
  tableauUrl: string = "AnlisedeVendaePerformance-GrficoBarras/Planilha1";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeVendaePerformance-GrficoBarras/Planilha1/1.png";

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
