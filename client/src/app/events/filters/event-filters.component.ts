import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { EventFilterModel } from './event-filter.model'

@Component({
  selector: 'event-filters',
  templateUrl: './event-filters.component.html',
  styles: []
})
export class EventFiltersComponent  {

  @Output() onEventFilterChanged : EventEmitter<EventFilterModel> = new EventEmitter();

  eventTypes: Array<string> = Array<string>();
  
  onFilterChanged(event:any, eventType:string) {
    let index = this.eventTypes.indexOf(eventType);
  
    if (event.checked && index === -1) {
      this.eventTypes.push(eventType);
    }

    if (!event.checked && index > -1) {
      this.eventTypes.splice(index, 1);
    }

    let filterModel = new EventFilterModel();
    filterModel.EventTypesToDisplay = this.eventTypes;

    this.onEventFilterChanged.emit(filterModel);
  }
}
