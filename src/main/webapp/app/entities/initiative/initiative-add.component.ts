import { Component, NgModule, OnInit } from '@angular/core';
import { InitiativeService } from 'app/entities/initiative/initiative.service';
import { Event } from 'app/entities/initiative/initiative.model';
import { User } from 'app/core';
import { FormControl } from '@angular/forms';

// import { ElementRef, NgZone, ViewChild } from '@angular/core';
// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';

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
    longitude: number;
    searchControl: FormControl;
    zoom: number;
    title: string;
    description: string;
    rating: number;
    isSaving: boolean;

    constructor(private initiativeService: InitiativeService) // private mapsAPILoader: MapsAPILoader,
    // private ngZone: NgZone
    {}

    ngOnInit() {
        this.isSaving = false;
        this.event = new Event();

        //set google maps defaults
        this.zoom = 4;
        this.latitude = 50.8282;
        this.longitude = 30.5795;

        //create search FormControl
        this.searchControl = new FormControl();

        // // set current position
        // this.setCurrentPosition();
        //
        // //load Places Autocomplete
        // this.mapsAPILoader.load().then(() => {
        //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        //         types: ["address"]
        //     });
        //     autocomplete.addListener("place_changed", () => {
        //         this.ngZone.run(() => {
        //             //get the place result
        //             let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        //
        //             //verify result
        //             if (place.geometry === undefined || place.geometry === null) {
        //                 return;
        //             }
        //
        //             //set latitude, longitude and zoom
        //             this.latitude = place.geometry.location.lat();
        //             this.longitude = place.geometry.location.lng();
        //             this.zoom = 12;
        //         });
        //     });
        // });
    }

    // private setCurrentPosition() {
    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             this.latitude = position.coords.latitude;
    //             this.longitude = position.coords.longitude;
    //             this.zoom = 12;
    //         });
    //     }
    // }

    // @ViewChild("search")
    // public searchElementRef: ElementRef;

    public save() {
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
