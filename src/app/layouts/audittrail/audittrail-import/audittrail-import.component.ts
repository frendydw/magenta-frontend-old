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
    console.log(this.audittrails);
    this.audittrailService.createAudittrail(this.audittrails[0]);
    alert("File saved!");
    this.router.navigate([`../audittrail-log`]);
  }

  saveClick() {
    if(confirm("Import file confirmation")) {
      this.save();
    }
  }
}
