import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {AudittrailComponent} from '../audittrail/audittrail.component';
import {ChartComponent} from '../chart/chart.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'audittrail', component: AudittrailComponent },
    { path: 'audittrail-chart-changes-type', component: ChartComponent },

]
