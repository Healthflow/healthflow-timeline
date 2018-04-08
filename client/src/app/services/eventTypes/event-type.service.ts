import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { EventTypeModel } from './event-type.model';

@Injectable()
export class EventTypeService {

    private typesUrl = 'http://localhost:3000/api/types';

    constructor(private http: HttpClient) { }

    getTypes() : Observable<EventTypeModel[]> {
        return this.http.get<EventTypeModel[]>(this.typesUrl)
            .pipe(
                tap(types => console.log('fetched types')),
                catchError(this.handleError('getTypes', []))
            )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {

            console.error(error);

            return of(result as T);
        }
    }
}