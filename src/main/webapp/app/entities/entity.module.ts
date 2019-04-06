import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';
import { entitiesState } from 'app/entities/entities.route';
import { InitiativeDetailComponent } from 'app/entities/initiative/initiative-detail.component';
import { InitiativeAddComponent } from 'app/entities/initiative/initiative-add.component';
import { HacknarokSharedModule } from 'app/shared';

@NgModule({
    imports: [RouterModule.forChild(entitiesState), HacknarokSharedModule],
    declarations: [InitiativeComponent, InitiativeDetailComponent, InitiativeAddComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HacknarokEntityModule {}
