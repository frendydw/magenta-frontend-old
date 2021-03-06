import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {AudittrailLogComponent} from '../audittrail/audittrail-log/audittrail-log.component';
import {AudittrailService} from '../../shared/services/audittrail.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {ChartChangesTypeIdMerchComponent} from '../chart/chart-changes-type-id-merch/chart-changes-type-id-merch.component';
import {ChartsModule} from 'ng2-charts';
import {ChartChangesTypeFieldComponent} from '../chart/chart-changes-type-field/chart-changes-type-field.component';
import {BrowserModule} from '@angular/platform-browser';
import {AudittrailImportComponent} from '../audittrail/audittrail-import/audittrail-import.component';
import {UserService} from '../../shared/services/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        HttpClientModule,
        ChartsModule,
    ],
  declarations: [
      AudittrailLogComponent,
      AudittrailImportComponent,
      ChartChangesTypeIdMerchComponent,
      ChartChangesTypeFieldComponent,
  ],
  providers: [
    AudittrailService,
    HttpClient
  ]

})

export class AdminLayoutModule {}
