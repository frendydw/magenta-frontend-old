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
import {AudittrailComponent} from '../audittrail/audittrail.component';
import {AudittrailService} from '../../shared/services/audittrail.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {ChartComponent} from '../chart/chart.component';
import {ChartsModule} from 'ng2-charts';

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
      AudittrailComponent,
      ChartComponent
  ],
  providers: [
    AudittrailService,
    HttpClient
  ]

})

export class AdminLayoutModule {}