import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InciativeComponent } from './inciative.component';
import { HacknarokSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from 'app/home';
import { InciativeRoute } from 'app/entities/inciative/inciative.router';

@NgModule({
    declarations: [InciativeComponent],
    imports: [CommonModule, HacknarokSharedModule, RouterModule.forChild([InciativeRoute])]
})
export class InciativeModule {}
