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
        console.log('Zapisjejeeeeeeeee');
    }

    public save() {
        console.log('Zapisjejeeeeeeeee');
        this.initiativeService.createEvent(this.event).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
    }

    private onSaveSuccess(result) {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    previousState() {
        window.history.back();
    }
}
