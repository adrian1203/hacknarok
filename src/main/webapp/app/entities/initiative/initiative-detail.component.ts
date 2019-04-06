import { Component, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';

@Component({
    selector: 'jhi-initiative-detail',
    templateUrl: './initiative-detail.component.html',
    styles: []
})
export class InitiativeDetailComponent implements OnInit {
    constructor(private initiativeService: InitiativeService) {}

    ngOnInit() {}
}
