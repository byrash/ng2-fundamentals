import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {EventService} from "./event.service";
import {Injectable} from "@angular/core";
/**
 * Created by Shivaji on 13/3/17.
 */
@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id']);
    }
}