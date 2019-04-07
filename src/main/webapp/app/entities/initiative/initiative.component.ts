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
    pictureSrc: any[] = ['../../../content/images/las3.jpg', '../../../content/images/las1.jpeg', '../../../content/images/szkola1.JPG'];
    constructor(private initativeService: InitiativeService) {}

    ngOnInit() {
        this.pictureSrc;
        this.initativeService.getEvent().subscribe(res => {
            console.log(res);
            this.events = res;
        });
    }
}
