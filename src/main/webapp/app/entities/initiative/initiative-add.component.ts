import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event } from 'app/entities/initiative/initiative.model';

@Component({
    selector: 'jhi-initiative-add',
    templateUrl: './initiative-add.component.html',
    styles: []
})
export class InitiativeAddComponent implements OnInit {
    event: Event;
    constructor(private initativeService: InitiativeService) {}

    ngOnInit() {
        this.event = new Event();
    }

    public save() {
        this.initativeService.createEvent(this.event);
    }
}