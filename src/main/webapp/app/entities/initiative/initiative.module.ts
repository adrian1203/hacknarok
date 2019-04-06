import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativeComponent } from './initiative.component';
import { HacknarokSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { HOME_ROUTE } from 'app/home';
import { InitiativeRoute } from 'app/entities/initiative/initiative.route';

@NgModule({
    declarations: [InitiativeComponent],
    imports: [CommonModule, HacknarokSharedModule, RouterModule.forChild([InitiativeRoute])]
})
export class InitiativeModule {}
