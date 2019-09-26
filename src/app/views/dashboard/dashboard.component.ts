import { Component } from '@angular/core';
import { ChartService } from '../../service/chart.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public userName = 'vishal';
  public password = 'Aug@2019';
  CHARTDATA = [];
  piechartLabel: Array<any> = [];
  piechartData: Array<any> = [];

  barchartLabel: Array<any> = [];
  barchartData: Array<any> = [];

  linechartLabel: Array<any> = [];
  linechartData: Array<any> = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getData().subscribe((res)=>{
            this.CHARTDATA = res['rows'];
            this.generateBarChart();
            this.generatePieChart();
            this.generateLineChart();
        });
    
  }

  // lineChart
  public generateLineChart() {
    for(var i=0; i< this.CHARTDATA.length; i++) {
      this.linechartLabel.push(this.CHARTDATA[i]['vendor_name']);
      this.linechartData.push({data: [this.CHARTDATA[i]['Total_Amount_CY']], label: this.CHARTDATA[i]['vendor_name']});
    }
  }
  public lineChartData: Array<any> = this.linechartData;
  // [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  public lineChartLabels: Array<any> = this.linechartLabel;
  //  ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // barChart
  public generateBarChart() {
    for(var i=0; i< this.CHARTDATA.length; i++) {
      this.barchartLabel.push(this.CHARTDATA[i]['vendor_name']);
      this.barchartData.push({data: [this.CHARTDATA[i]['Total_Amount_CY']], label: this.CHARTDATA[i]['vendor_name']});
    }
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = this.barchartLabel;
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = this.barchartData;
  
  // [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';


     // scatter
    //public scatterChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    public scatterChartData: any[] = [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 5, y: -3 },
        ],
        label: 'VeriFone Inc - need more data',
        pointRadius: 10,
      },
    ];
  public scatterChartType = 'scatter'; 

  // Pie
  public generatePieChart() {
    for(var i=0; i< this.CHARTDATA.length; i++) {
      this.piechartLabel.push(this.CHARTDATA[i]['vendor_name']);
      this.piechartData.push(this.CHARTDATA[i]['Total_Amount_CY']);
    }
  }

  public pieChartLabels: string[] = this.piechartLabel;
  public pieChartData: number[] = this.piechartData;
  public pieChartType = 'pie';

  // Bubble Chart
  public bubbleChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };
  public bubbleChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: any[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];

  public bubbleChartColors: any[] = [
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}