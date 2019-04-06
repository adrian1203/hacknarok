import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';
import { entitiesState } from 'app/entities/entities.route';
import { InitiativeDetailComponent } from 'app/entities/initiative/initiative-detail.component';

@NgModule({
    imports: [RouterModule.forChild(entitiesState)],
    declarations: [InitiativeComponent, InitiativeDetailComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HacknarokEntityModule {}
