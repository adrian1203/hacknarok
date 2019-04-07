import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event, Comment } from 'app/entities/initiative/initiative.model';
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
    longitude: number;
    title: string;
    description: string;
    rating: number;
    id: number;
    note: number;
    comment: Comment;

    constructor(private initiativeService: InitiativeService, private router: ActivatedRoute) {}

    ngOnInit() {
        this.event = new Event();
        this.id = parseInt(this.router.snapshot.paramMap.get('id'));
        this.initiativeService.getEventById(this.id).subscribe(res => {
            console.log(res);
            this.event = res;
            this.comment = new Comment();
            this.comment.event = res;
            console.log(this.comment);
        });
    }

    loadAll() {
        this.initiativeService.getEventById(this.id).subscribe(res => {
            console.log(res);
            this.event = res;
            this.comment = new Comment();
            this.comment.event = res;
            console.log(this.comment);
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
    addComment() {
        console.log(this.comment);
        this.initiativeService.saveComment(this.comment).subscribe(res => {
            console.log(res);
            this.comment = new Comment();
            this.loadAll();
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
