import { UserRouteAccessService } from 'app/core';
import { Routes } from '@angular/router';
import { InciativeRoute } from 'app/entities/inciative/inciative.router';

const INICIATIVE_ROUTES = [InciativeRoute];

export const entitiesState: Routes = [
    {
        path: '',
        canActivate: [UserRouteAccessService],
        children: INICIATIVE_ROUTES
    }
];
