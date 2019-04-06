import { Component, OnInit } from '@angular/core';
import { InciativeService } from 'app/entities/inciative/inciative.service';

@Component({
    selector: 'jhi-inciative',
    templateUrl: './inciative.component.html',
    styles: []
})
export class InciativeComponent implements OnInit {
    constructor(private inciativeService: InciativeService) {}

    ngOnInit() {
        this.inciativeService.getEvent().subscribe(res => {
            console.log(res);
        });
    }
}
