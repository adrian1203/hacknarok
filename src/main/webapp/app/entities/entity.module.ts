import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitiativeComponent } from 'app/entities/initiative/initiative.component';
import { entitiesState } from 'app/entities/entities.route';
import { InitiativeDetailComponent } from 'app/entities/initiative/initiative-detail.component';
import { InitiativeAddComponent } from 'app/entities/initiative/initiative-add.component';
import { HacknarokSharedModule } from 'app/shared';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        // AgmCoreModule.forRoot({
        //     apiKey: "AIzaSyB7FRKcXXnyUp8wNaY1tMi1poCaX6nos4Y",
        //     libraries: ["places"]
        // }),
        // BrowserModule,
        // FormsModule,
        // ReactiveFormsModule,
        RouterModule.forChild(entitiesState),
        HacknarokSharedModule,
        HttpClientModule,
        DataViewModule
    ],
    declarations: [InitiativeComponent, InitiativeDetailComponent, InitiativeAddComponent],
    entryComponents: [],
    providers: [InitiativeDetailComponent, HttpClientModule, DataViewModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HacknarokEntityModule {}
