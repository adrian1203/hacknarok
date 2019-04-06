import { UserRouteAccessService } from 'app/core';
import { Routes } from '@angular/router';
import { InitiativeDetailRoute, InitiativeRoute, InitiativeAddRoute } from 'app/entities/initiative/initiative.route';

const INITIATIVE_ROUTES = [InitiativeRoute];
const INITIATIVE_DETAIL_ROUTES = [InitiativeDetailRoute];
const INITIATIVE_ADD_ROUTES = [InitiativeAddRoute];

export const entitiesState: Routes = [
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INITIATIVE_ROUTES
    },
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INITIATIVE_DETAIL_ROUTES
    },
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INITIATIVE_ADD_ROUTES
    }
];
