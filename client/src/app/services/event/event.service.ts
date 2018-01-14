import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';

import { Socket } from '../../shared/socket';
import { EventModel } from './event.model';

declare var io : {
  connect(url: string): Socket;
};

@Injectable()
export class EventService {

  socket: Socket;
  observer: Observer<EventModel>;

  getEvents() : Observable<EventModel> {
    this.socket = socketIo('http://localhost:3000');

    this.socket.on('data', (res) => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable() : Observable<EventModel> {
      return new Observable<EventModel>(observer => {
        this.observer = observer;
      });
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }

}