import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { DespesasPorCategoriaComponent } from './components/graphics/analise-financeira/despesas-por-categoria/despesas-por-categoria.component';
import { ReceitaDespesaComponent } from './components/graphics/analise-financeira/receita-despesa/receita-despesa.component';
import { AnaliseTemporalComponent } from './components/graphics/analise-venda/analise-temporal/analise-temporal.component';
import { AnaliseVendaComponent } from './components/graphics/analise-venda/analise-venda/analise-venda.component';
import { ProdutoPorRegiaoComponent } from './components/graphics/analise-venda/produto-por-regiao/produto-por-regiao.component';
import { VendaPorProdutoComponent } from './components/graphics/analise-venda/venda-por-produto/venda-por-produto.component';
import { EficienciaProducaoComponent } from './components/graphics/desempenho-operacional/eficiencia-producao/eficiencia-producao.component';
import { KpiComponent } from './components/graphics/desempenho-operacional/kpi/kpi.component';
import { RelacaoCustoTempoComponent } from './components/graphics/desempenho-operacional/relacao-custo-tempo/relacao-custo-tempo.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ExamplesComponent,
    DespesasPorCategoriaComponent,
    ReceitaDespesaComponent,
    AnaliseTemporalComponent,
    AnaliseVendaComponent,
    ProdutoPorRegiaoComponent,
    VendaPorProdutoComponent,
    EficienciaProducaoComponent,
    KpiComponent,
    RelacaoCustoTempoComponent,
    PricingComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
