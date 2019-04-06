import { Component, OnInit } from '@angular/core';
import { InitiativeService } from './initiative.service';
import { Event } from './initiative.model';

@Component({
    selector: 'jhi-initiative',
    templateUrl: './initiative.component.html',
    styles: []
})
export class InitiativeComponent implements OnInit {
    events: Event[];
    constructor(private initativeService: InitiativeService) {}

    ngOnInit() {
        this.initativeService.getEvent().subscribe(res => {
            console.log(res);
            this.events = res;
        });
    }
}
