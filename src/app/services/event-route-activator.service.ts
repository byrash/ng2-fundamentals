import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {EventService} from "./event.service";
import {AuthService} from "../user/auth/auth.service";
/**
 * Created by Shivaji on 13/3/17.
 */
@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router, private auth: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent((+route.params['id']));

        if (!eventExists) {
            this.router.navigate(['/404']);
        }else if(!this.auth.isAuthenticated()){
            this.router.navigate(['/user/login']);
        }
        return eventExists;
    }

}