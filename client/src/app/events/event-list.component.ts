import { Component, OnInit, OnDestroy } from '@angular/core';

import { EventService } from '../services/event/event.service';
import { EventModel } from '../services/event/event.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styles: ['event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  
  events:Array<EventModel> = [];
  subscription:Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.eventService.getEvents()
        .subscribe(event => {

          console.log(event);

          this.events.push(event);
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
