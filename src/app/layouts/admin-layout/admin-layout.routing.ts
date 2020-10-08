import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import {AudittrailComponent} from '../audittrail/audittrail.component';
import {ChartChangesTypeIdMerchComponent} from '../chart-changes-type-id-merch/chart-changes-type-id-merch.component';
import {ChartChangesTypeFieldComponent} from '../chart-changes-type-field/chart-changes-type-field.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'audittrail', component: AudittrailComponent },
    { path: 'audittrail-chart-changes-type-id-merch', component: ChartChangesTypeIdMerchComponent },
    { path: 'audittrail-chart-changes-type-field', component: ChartChangesTypeFieldComponent },

]
