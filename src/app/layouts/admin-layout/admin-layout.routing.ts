import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {AudittrailLogComponent} from '../audittrail/audittrail-log/audittrail-log.component';
import {ChartChangesTypeIdMerchComponent} from '../chart/chart-changes-type-id-merch/chart-changes-type-id-merch.component';
import {ChartChangesTypeFieldComponent} from '../chart/chart-changes-type-field/chart-changes-type-field.component';
import {AudittrailImportComponent} from '../audittrail/audittrail-import/audittrail-import.component';
import {LoginComponent} from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'audittrail-log', component: AudittrailLogComponent },
    { path: 'audittrail-import', component: AudittrailImportComponent },
    { path: 'audittrail-chart-changes-type-id-merch', component: ChartChangesTypeIdMerchComponent },
    { path: 'audittrail-chart-changes-type-field', component: ChartChangesTypeFieldComponent },
]
