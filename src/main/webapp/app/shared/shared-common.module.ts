import { NgModule } from '@angular/core';

import { HacknarokSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HacknarokSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HacknarokSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HacknarokSharedCommonModule {}
