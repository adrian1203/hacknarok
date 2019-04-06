import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { Event } from 'app/entities/initiative/initiative.model';
import { IUser } from 'app/core';

@Injectable({ providedIn: 'root' })
export class InitiativeService {
    constructor(private http: HttpClient) {}

    getEvent(): Observable<Event[]> {
        return this.http.get<Event[]>(SERVER_API_URL + 'api/events');
    }

    getEventById(id: number) {
        return this.http.get<Event>(SERVER_API_URL + 'api/event/' + id);
    }

    createEvent(event: Event): Observable<HttpResponse<Event>> {
        console.log('Zapiusjeeeeeeeeee');
        return this.http.post<Event>(SERVER_API_URL + 'api/event', event, { observe: 'response' });
    }
}
