import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EventService } from '../services/event/event.service';
import { EventModel } from '../services/event/event.model';
import { EventFilterModel } from './filters/event-filter.model';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {
  
  events:Array<EventModel> = [];
  displayEvents: Array<EventModel> = [];
  filter:EventFilterModel;
  subscription:Subscription;
 
  @Input()
  set eventFilter(eventFilter: EventFilterModel) {
    this.filter = eventFilter;
    this.displayEvents = this.filterEventsByType(eventFilter, this.events);
  }

  get eventFilter(): EventFilterModel {
    return this.eventFilter; 
  }

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.subscription = this.eventService.getEvents()
        .subscribe(event => {
          this.events.push(event);
          
          if (this.eventMatchesFilter(this.filter, event)) {
            this.displayEvents.push(event);
          }
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filterEventsByType(filter: EventFilterModel, events: Array<EventModel>) : Array<EventModel> {

    let filteredEvents : Array<EventModel> = [];

    for (let event of events) {
      if(!filter || filter.EventTypesToDisplay.length === 0 || this.eventMatchesFilter(filter, event)) {
        filteredEvents.push(event);
      }
    }

    return filteredEvents;
  }

  eventMatchesFilter(filter: EventFilterModel, event: EventModel) : boolean {

    if (!filter) {
      return true;
    }

    let isMatch = filter.EventTypesToDisplay.includes(event.Type.Name);

    return isMatch;
  }  
}
