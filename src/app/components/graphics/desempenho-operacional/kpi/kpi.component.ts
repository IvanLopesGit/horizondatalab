import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss'
})
export class KpiComponent {
  tableauUrl: string = "AnlisedeDesempenhoOperacional-kpi/GrficodeLinhas";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeDesempenhoOperacional-kpi/GrficodeLinhas/1.png";

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
