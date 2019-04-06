import { UserRouteAccessService } from 'app/core';
import { Routes } from '@angular/router';
import { InitiativeDetailRoute, InitiativeRoute } from 'app/entities/initiative/initiative.route';

const INITIATIVE_ROUTES = [InitiativeRoute];
const INICIATIVE_DETAIL_ROUTES = [InitiativeDetailRoute];

export const entitiesState: Routes = [
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INITIATIVE_ROUTES
    },
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INICIATIVE_DETAIL_ROUTES
    }
];
