import { Route } from '@angular/router';
import { JhiMetricsMonitoringComponent } from 'app/admin';

export const InciativeRoute: Route = {
    path: 'iniciative',
    component: JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'Iniciatywy'
    }
};
