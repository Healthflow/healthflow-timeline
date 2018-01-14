import { Component, Input } from '@angular/core';
@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styles: []
})
export class EventCardComponent  {
  @Input() event:any
}
