import { Route } from '@angular/router';
import { JhiMetricsMonitoringComponent } from 'app/admin';
import { InciativeComponent } from 'app/entities/inciative/inciative.component';

export const InciativeRoute: Route = {
    path: 'iniciative',
    component: InciativeComponent,
    data: {
        pageTitle: 'Iniciatywy'
    }
};
