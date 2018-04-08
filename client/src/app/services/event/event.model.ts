import { EventTypeModel } from "../eventTypes/event-type.model";

export class EventModel {
    Title:string;
    Description:string;
    Type:EventTypeModel;
}