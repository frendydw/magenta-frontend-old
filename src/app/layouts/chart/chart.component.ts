import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AudittrailService} from '../../shared/services/audittrail.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private event: any;
  flag: boolean;
  constructor(private audittrailService: AudittrailService,
              private router: Router) {
    this.flag = false;
  }

  insertCount: number;
  updateCount: number;
  deleteCount: number;
  insertValue: string;
  updateValue: string;
  deleteValue: string;

  title = 'Audittrail Change Type Bar Graph';

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  };
  labels =  ['Insert', 'Update', 'Delete'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Audittrail Changes Type Count',
      data: []
    }
  ];

  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(44,130,201,1)'
    },
  ];



  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

  ngOnInit(): void {
    this.audittrailService.getAudittrailChangeTypeCount().subscribe(res => {
      this.insertCount = (res[0][0]);
      this.updateCount = (res[1][0]);
      this.deleteCount = (res[2][0]);
      this.chartData[0].data[0] = this.insertCount;
      this.chartData[0].data[1] = this.updateCount;
      this.chartData[0].data[2] = this.deleteCount;
      this.insertValue = this.insertCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      this.updateValue = this.updateCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      this.deleteValue = this.deleteCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

      this.flag = true;
    });
  }
}
