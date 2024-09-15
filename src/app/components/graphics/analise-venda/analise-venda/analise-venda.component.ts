import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-analise-venda',
  templateUrl: './analise-venda.component.html',
  styleUrl: './analise-venda.component.scss'
})
export class AnaliseVendaComponent implements AfterViewInit {
  tableauUrl: string = "AnlisedeVendaePerformance/Planilha1";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeVendaePerformance/Planilha1/1.png";
  

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
