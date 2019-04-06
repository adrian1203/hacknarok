import { Route } from '@angular/router';
import { JhiMetricsMonitoringComponent } from 'app/admin';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';
import { InitiativeDetailComponent } from 'app/entities/initiative/initiative-detail.component';
import { InitiativeAddComponent } from 'app/entities/initiative/initiative-add.component';

export const InitiativeRoute: Route = {
    path: 'initiative',
    component: InitiativeComponent,
    data: {
        pageTitle: 'Inicjatywy'
    }
};

export const InitiativeDetailRoute: Route = {
    path: 'initiative/:id',
    component: InitiativeDetailComponent,
    data: {
        pageTitle: 'Inicjatywy szczegóły'
    }
};

export const InitiativeAddRoute: Route = {
    path: 'initiative-add',
    component: InitiativeAddComponent,
    data: {
        pageTitle: 'Inicjatywy tworzenie'
    }
};