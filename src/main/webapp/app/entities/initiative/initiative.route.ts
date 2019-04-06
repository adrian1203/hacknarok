import { Route } from '@angular/router';
import { JhiMetricsMonitoringComponent } from 'app/admin';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';

export const InitiativeRoute: Route = {
    path: 'initiative',
    component: InitiativeComponent,
    data: {
        pageTitle: 'Iniciatywy'
    }
};
