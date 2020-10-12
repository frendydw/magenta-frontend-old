import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AudittrailService} from '../../../shared/services/audittrail.service';
import * as XLSX from 'xlsx';
import {Audittrail} from '../../../shared/models/audittrail';
import {ExcelService} from '../../../shared/excel/excel.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-audittrail',
  templateUrl: './audittrail-import.component.html',
  styleUrls: ['./audittrail-import.component.css']
})
export class AudittrailImportComponent implements OnInit {
  audittrails: Audittrail[] = [];
  audittrailsSave: Audittrail = new Audittrail();
  dateNow = new Date();
  flag: boolean;

  constructor(private audittrailService: AudittrailService,
              private excelService: ExcelService,
              private router: Router) {
    this.flag = false;
  }

  ngOnInit() {
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = <any[]>this.excelService.importFromFile(bstr);
      console.log(data);
      const header: string[] = Object.getOwnPropertyNames(new Audittrail());
      const importedData = data.slice(1);

      this.audittrails = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return <Audittrail>obj;
      })
      console.log(this.audittrails);
    };
    reader.readAsBinaryString(target.files[0]);
    this.flag = true;
  }

  save() {
    this.audittrails.forEach(value => {
      this.audittrailsSave = value;
      this.audittrailsSave.createdDate = this.excelDateToJSDate(this.audittrailsSave.createdDate);
      this.audittrailService.createAudittrail(this.audittrailsSave).subscribe(data => {
        this.audittrailsSave = new Audittrail();
      },error => console.log(error));
    });
    alert("File saved!");
    this.router.navigate([`../audittrail-log`]);
  }

  saveClick() {
    if(confirm("Import file confirmation")) {
      this.save();
    }
  }

  excelDateToJSDate(date) {
    const dateConvert = new Date(Math.round((date - 25569)*86400*1000));
    date = dateConvert.getFullYear() + '-' + dateConvert.getMonth() + '-' + dateConvert.getDate();
    return date;
  }
}
