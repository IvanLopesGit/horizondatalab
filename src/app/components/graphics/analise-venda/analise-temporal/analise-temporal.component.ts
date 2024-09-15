import { Component } from '@angular/core';

@Component({
  selector: 'app-analise-temporal',
  templateUrl: './analise-temporal.component.html',
  styleUrl: './analise-temporal.component.scss'
})
export class AnaliseTemporalComponent {
  tableauUrl: string = "AnlisedeVendaePerformance-AnliseTemporal/Planilha3";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeVendaePerformance-AnliseTemporal/Planilha3/1.png";

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
