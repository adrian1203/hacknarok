import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event } from 'app/entities/initiative/initiative.model';
import { User } from 'app/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

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
    id: number;
    note: number;

    constructor(private initiativeService: InitiativeService, private router: ActivatedRoute) {}

    ngOnInit() {
        this.event = new Event();
        this.router.snapshot.paramMap.get('id');
        console.log(this.router.snapshot.paramMap.get('id'));
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        //console.log(this.router.snparams['id']);
        console.log(this.id);
        this.initiativeService.getEventById(this.id).subscribe(res => {
            console.log(res);
            this.event = res;
        });
    }

    previousState() {
        window.history.back();
    }

    addToEvent() {
        console.log('Dodaje');

        this.initiativeService.addToEvent(this.id).subscribe(res => {
            console.log(res);
        });
    }
    saveNote() {
        this.initiativeService.saveNote(this.note, this.id).subscribe(res => {
            console.log(res);
        });
    }
}

@Component({
    selector: 'ngbd-rating-template',
    styles: [
        `
            .star {
                font-size: 1.5rem;
                color: #b0c4de;
            }
            .filled {
                color: #1e90ff;
            }
            .bad {
                color: #deb0b0;
            }
            .filled.bad {
                color: #ff1e1e;
            }
        `
    ]
})
export class NgbdRatingTemplate {
    constructor(private initiativeService: InitiativeService, private router: ActivatedRoute) {}

    currentRate = 6;
}
