import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event } from 'app/entities/initiative/initiative.model';
import { User } from 'app/core';

@Component({
    selector: 'jhi-initiative-add',
    templateUrl: './initiative-add.component.html',
    styles: []
})
export class InitiativeAddComponent implements OnInit {
    event: Event;
    creator: User;
    createDate: Date;
    startDate: Date;
    endDate: Date;
    latitude: number;
    longtitude: number;
    title: string;
    description: string;
    rating: number;
    isSaving: boolean;

    constructor(private initiativeService: InitiativeService) {}

    ngOnInit() {
        this.isSaving = false;
        this.event = new Event();
        this.creator = new User();
        this.createDate = new Date();
        this.startDate = new Date();
        this.endDate = new Date();
        this.latitude = 0.0;
        this.longtitude = 0.0;
        this.title = '';
        this.description = '';
        this.rating = 0.0;
    }

    previousState() {
        window.history.back();
    }

    public save() {
        this.initiativeService.createEvent(this.event);
        console.log('dupka');
    }
}
