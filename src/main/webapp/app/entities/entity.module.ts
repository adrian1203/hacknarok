import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InciativeComponent } from 'app/entities/inciative/inciative.component';
import { entitiesState } from 'app/entities/entities.router';
import { InciativeDetailComponent } from 'app/entities/inciative/inciative-detail.component';

@NgModule({
    imports: [RouterModule.forChild(entitiesState)],
    declarations: [InciativeComponent, InciativeDetailComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HacknarokEntityModule {}
