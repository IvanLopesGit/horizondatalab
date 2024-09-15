import { Component } from '@angular/core';

@Component({
  selector: 'app-relacao-custo-tempo',
  templateUrl: './relacao-custo-tempo.component.html',
  styleUrl: './relacao-custo-tempo.component.scss'
})
export class RelacaoCustoTempoComponent {
  tableauUrl: string = "AnlisedeDesempenhoOperacional-RelaoCustoOperacionalxTempodeEntrega/GrficodeDisperso";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeDesempenhoOperacional-RelaoCustoOperacionalxTempodeEntrega/GrficodeDisperso/1.png";

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
