import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../service/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  CHARTDATA = [];
  barchartLabel = [];
  barchartData = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData().subscribe(res => {
      this.CHARTDATA = res['rows'];
      this.generateBarChart(this.CHARTDATA);
    });
  }

    // barChart
    public generateBarChart(data) {
      if (data.length > 0) {
          for(var i=0; i< data.length; i++) {
            this.barchartLabel.push(data[i]['vendor_name']);
            this.barchartData.push({data: [data[i]['Total_Amount_CY']], label: data[i]['vendor_name']});
          }
      }
    }

    public barChartOptions: any = {
      animation: false,
      responsive: true
    };
    public barChartLabels: string[] = this.barchartLabel;
    public barChartType = 'bar';
    public barChartLegend = true;
  
    public barChartData: any[] = this.barchartData;

}
