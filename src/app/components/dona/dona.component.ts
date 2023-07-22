import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData, Color} from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {
  @Input() titles:string= "sin titulo"; 

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') data:number[]=[350, 450, 100]
  public colors: Color[]=['#9e120e','#ff5800','#ffb414'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data , backgroundColor:this.colors},
    ],
  };
  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets:[{ data: this.data, backgroundColor:this.colors}]
   
    }
   
  }

  
}
