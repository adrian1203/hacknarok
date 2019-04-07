import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';
import { entitiesState } from 'app/entities/entities.route';
import { InitiativeDetailComponent } from 'app/entities/initiative/initiative-detail.component';
import { InitiativeAddComponent } from 'app/entities/initiative/initiative-add.component';
import { HacknarokSharedModule } from 'app/shared';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
    imports: [RouterModule.forChild(entitiesState), HacknarokSharedModule, HttpClientModule, DataViewModule],
    declarations: [InitiativeComponent, InitiativeDetailComponent, InitiativeAddComponent],
    entryComponents: [],
    providers: [InitiativeDetailComponent, HttpClientModule, DataViewModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HacknarokEntityModule {}
