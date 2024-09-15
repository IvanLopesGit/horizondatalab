import { Component } from '@angular/core';

@Component({
  selector: 'app-eficiencia-producao',
  templateUrl: './eficiencia-producao.component.html',
  styleUrl: './eficiencia-producao.component.scss'
})
export class EficienciaProducaoComponent {
  tableauUrl: string = "AnlisedeDesempenhoOperacional-EficinciadeProduo/GrficodeBarras";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeDesempenhoOperacional-EficinciadeProduo/GrficodeBarras/1.png";

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
