import { Component } from '@angular/core';

@Component({
  selector: 'app-venda-por-produto',
  templateUrl: './venda-por-produto.component.html',
  styleUrl: './venda-por-produto.component.scss'
})
export class VendaPorProdutoComponent {
  tableauUrl: string = "AnlisedeVendaePerformance-Vendasporproduto/Planilha2";
  staticImageUrl: string = "https://public.tableau.com/static/images/An/AnlisedeVendaePerformance-Vendasporproduto/Planilha2/1.png";

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
