import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataPipelineService } from '../../services/data-pipeline.service';
import { Chart, registerables } from 'chart.js';

interface HTMLCanvasElementWithChart extends HTMLCanvasElement {
  chart?: Chart; // Adicionando a propriedade 'chart' opcional
}

interface ErrorMsg {
  errorMsg: string,
  invalid_columns: string
}

@Component({
  selector: 'app-analysis-hub',
  templateUrl: './analysis-hub.component.html',
  styleUrl: './analysis-hub.component.scss'
})

export class AnalysisHubComponent implements OnInit {
  fileName: string | null = null;
  
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  public apiData: any;
  private selectedFile: File | null = null;
  private chartInstance: any; 
  public errorMsg: ErrorMsg = {
    errorMsg: '',
    invalid_columns: ''
  };

  constructor(
    private service: DataPipelineService
  ) {
    // Registra os componentes do Chart.js, como escalas, legendas, etc.
    Chart.register(...registerables);
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.selectedFile = file;
      this.fetchData(this.selectedFile)
    }
  }

  fetchData(file: any): void {
    this.service.uploadCsv(file).subscribe({
      next: (data) => {
        this.apiData = data;
        console.log('data', this.apiData)
        this.renderGraph(data);
      },
      error: (error) => {
        const errorResponse = error.error;
        this.errorMsg.errorMsg = errorResponse.error;
        this.errorMsg.invalid_columns = errorResponse.invalid_columns
        console.log('Erro ao chamar a API', error);
      },
      complete: () => {
        console.log('Chamada da API completa');
      }
    });
  }

  renderGraph(graphData: any): void {
    const ctx = this.chartCanvas?.nativeElement.getContext('2d'); // Usando ViewChild para referenciar o canvas dinamicamente
    console.log('Dados do gráfico:', graphData); // Verificando os dados do gráfico

    // Limpar o gráfico anterior se já existir
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    // Criar um novo gráfico

    if (ctx) {
      this.chartInstance = new Chart(ctx, {
        type: 'bar', // Altere o tipo de gráfico conforme necessário
        data: {
          labels: graphData.labels, // Labels vindas da API
          datasets: [{
            label: 'My Dataset',
            data: graphData.values, // Valores vindos da API
            backgroundColor: 'rgba(255, 159, 64, 0.4)',  // Laranja suave translúcido
            borderColor: 'rgba(255, 159, 64, 1)',   
            borderWidth: 1
          }]
        },
        options: {
          responsive: true, // Tornar o gráfico responsivo
          scales: {
            y: {
              beginAtZero: true,
              type: 'linear'
            }
          }
        }
      });
    }
    else {
      console.error('Falha ao obter o contexto 2D do canvas.');
    }
  }
}
