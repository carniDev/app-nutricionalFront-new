import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  @Input() proteinData!: number;
  @Input() carbData!: number;
  @Input() fatData!: number;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    new Chart('nutrientChart', {
      type: 'doughnut',
      data: {
        labels: ['Proteínas', 'Carbohidratos', 'Grasa'],
        datasets: [{
          data: [this.proteinData, this.carbData, this.fatData],
          backgroundColor: ['#FF5733', '#33FF57', '#33A3FF']
        }]
      },
      options: {
        cutout: '50%',
        responsive: true,
        maintainAspectRatio: true,
        
        }
      
    });
  }
}
