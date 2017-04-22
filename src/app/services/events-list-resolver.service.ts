import {Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {Injectable} from "@angular/core";
/**
 * Created by Shivaji on 13/3/17.
 */
@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) {
    }

    resolve() {
        return this.eventService.getEvents();
    }
}