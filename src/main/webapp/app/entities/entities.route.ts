import { UserRouteAccessService } from 'app/core';
import { Routes } from '@angular/router';
import { InitiativeRoute } from 'app/entities/initiative/initiative.route';

const INITIATIVE_ROUTES = [InitiativeRoute];

export const entitiesState: Routes = [
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INITIATIVE_ROUTES
    }
];
