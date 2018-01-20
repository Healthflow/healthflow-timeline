import { Component, OnInit } from '@angular/core';
import { EventFilterModel } from './events/filters/event-filter.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  title = 'main';
  eventFilter: EventFilterModel;

  ngOnInit() {
  }

  onEventFilterChanged(eventFilter: EventFilterModel) {
    this.eventFilter = eventFilter;
  }
}