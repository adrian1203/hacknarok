import { Route } from '@angular/router';
import { JhiMetricsMonitoringComponent } from 'app/admin';
import { InciativeComponent } from 'app/entities/inciative/inciative.component';
import { InciativeDetailComponent } from 'app/entities/inciative/inciative-detail.component';

export const InciativeRoute: Route = {
    path: 'iniciative',
    component: InciativeComponent,
    data: {
        pageTitle: 'Iniciatywy'
    }
};

export const InciativeDetailRoute: Route = {
    path: 'iniciative/:id',
    component: InciativeDetailComponent,
    data: {
        pageTitle: 'Iniciatywy'
    }
};
