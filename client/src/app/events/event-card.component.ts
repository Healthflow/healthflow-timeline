import { Component, Input } from '@angular/core';
import { EventTypeModel } from '../services/eventTypes/event-type.model';
@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent  {
  @Input() event:any

  // I couldn't find another way to get this class added to the list element without also removing the material design class
  getEventTypeClass(eventType: EventTypeModel) {
    return eventType.Class;
  }
}
