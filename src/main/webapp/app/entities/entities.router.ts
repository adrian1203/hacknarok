import { UserRouteAccessService } from 'app/core';
import { Routes } from '@angular/router';
import { InciativeDetailRoute, InciativeRoute } from 'app/entities/inciative/inciative.router';

const INICIATIVE_ROUTES = [InciativeRoute];
const INICIATIVE_DETAIL_ROUTES = [InciativeDetailRoute];

export const entitiesState: Routes = [
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INICIATIVE_ROUTES
    },
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INICIATIVE_DETAIL_ROUTES
    }
];
