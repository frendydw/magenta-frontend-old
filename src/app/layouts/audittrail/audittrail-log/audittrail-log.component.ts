import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Audittrail} from '../../../shared/models/audittrail';
import {AudittrailService} from '../../../shared/services/audittrail.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-audittrail',
  templateUrl: './audittrail-log.component.html',
  styleUrls: ['./audittrail-log.component.css']
})
export class AudittrailLogComponent implements OnInit {
  audittrails: Observable<Audittrail[]>;
  page: number;
  pageSize: number;
  startFrom: number;
  changeType: string;
  search: string;
  idMerchant: number;
  filename: string;

  constructor(private audittrailService: AudittrailService,
              private router: Router) {
    this.changeType = 'ALL';
    this.search = '';
    this.startFrom = 0;
    this.page = 0;
    this.pageSize = 25;
    this.idMerchant = 0;

    const userName = sessionStorage.getItem('user_username');
    console.log(userName);

    if (!userName) {
      alert('Please Login First!');
      this.router.navigate(['./login']);
    }
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.audittrails = this.audittrailService.getAudittrailAll(this.page.toString(), this.pageSize.toString(),
      this.changeType, this.search, this.idMerchant.toString());
    this.audittrails.subscribe(res => console.log(res))
  }

  numbers(startFrom: number) {
    return Array.from({length: 5}, (_, i) => startFrom + 1)
  }

  pagination(page: number) {
    this.page = page;
    this.reloadData();
  }

  nextPrevious(num: number) {
    this.startFrom += num;
    if (this.startFrom === -1) {
      this.startFrom += 1;
      return;
    }
    this.page += num;
    this.reloadData();
  }

  // exportToExcel() {
  //   this.audittrailService.exportAudittrailLog(this.page.toString(), this.pageSize.toString(),
  //       this.changeType, this.search, this.idMerchant.toString());
  // }

  exportToExcel(): void
  {
    let date = new Date();
    this.filename = 'audittrail_' + ('0' + date.getDate()).slice(-2) + '_'
        + ('0' + (date.getMonth()+1)).slice(-2) + '_'
        + date.getFullYear() + '_' + date.getHours()
        + '.' + date.getMinutes() + '.xlsx';
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.filename);
  }

}
