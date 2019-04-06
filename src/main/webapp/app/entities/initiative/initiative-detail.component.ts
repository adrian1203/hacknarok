import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event } from 'app/entities/initiative/initiative.model';
import { User } from 'app/core';

@Component({
    selector: 'jhi-initiative-detail',
    templateUrl: './initiative-detail.component.html',
    styles: []
})
export class InitiativeDetailComponent implements OnInit {
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

    constructor(private initiativeService: InitiativeService) {}

    ngOnInit() {
        this.event = new Event();
        this.initiativeService.getEventById(1053);
    }

    previousState() {
        window.history.back();
    }
}
