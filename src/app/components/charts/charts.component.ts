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
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
      }
    });
    new Chart('proteinChart', {
      type: 'doughnut',
      data: {
        labels: ['Proteínas'],
        datasets: [{
          data: [this.proteinData],
          backgroundColor: ['#FF5733']
        }]
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
      }
    });
    new Chart('carbChart', {
      type: 'doughnut',
      data: {
        labels: ['Carbohidratos'],
        datasets: [{
          data: [this.carbData],
          backgroundColor: ['#33FF57']
        }]
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
      }
    });
    new Chart('fatChart', {
      type: 'doughnut',
      data: {
        labels: ['grasas'],
        datasets: [{
          data: [this.fatData],
          backgroundColor: ['#33A3FF']
        }]
      },
      options: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
}
