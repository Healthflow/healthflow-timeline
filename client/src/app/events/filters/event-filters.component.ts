import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

import { EventFilterModel } from './event-filter.model'
import { EventTypeService } from '../../services/eventTypes/event-type.service';
import { EventTypeModel } from '../../services/eventTypes/event-type.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'event-filters',
  templateUrl: './event-filters.component.html',
  styleUrls: ['./event-filters.component.scss']
})
export class EventFiltersComponent implements OnInit, OnDestroy  {

  @Output() onEventFilterChanged : EventEmitter<EventFilterModel> = new EventEmitter();

  eventTypes: EventTypeModel[];
  subscription: Subscription;

  eventTypesToDisplay: Array<string> = Array<string>();

  constructor(private eventTypeService: EventTypeService) {}

  ngOnInit() {
    this.subscription = this.eventTypeService.getTypes().subscribe(eventTypes => this.eventTypes = eventTypes);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // I couldn't find another way to get this class added to the list element without also removing the material design class
  getEventTypeClass(eventType: EventTypeModel) {
    return eventType.Class;
  }
  
  onFilterChanged(event:any, eventType:string) {
    let index = this.eventTypesToDisplay.indexOf(eventType);
  
    if (event.checked && index === -1) {
      this.eventTypesToDisplay.push(eventType);
    }

    if (!event.checked && index > -1) {
      this.eventTypesToDisplay.splice(index, 1);
    }

    let filterModel = new EventFilterModel();
    filterModel.EventTypesToDisplay = this.eventTypesToDisplay;

    this.onEventFilterChanged.emit(filterModel);
  }
}
