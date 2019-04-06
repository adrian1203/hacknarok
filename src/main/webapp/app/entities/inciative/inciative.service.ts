import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class InciativeService {
    constructor(private http: HttpClient) {}

    getEvent(): Observable<Event> {
        return this.http.get<Event>(SERVER_API_URL + 'events');
    }
}
