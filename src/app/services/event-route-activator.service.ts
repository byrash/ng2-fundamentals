import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, Router, ActivatedRoute} from "@angular/router";
import {EventService} from "./event.service";
import {AuthService} from "../user/auth/auth.service";
/**
 * Created by Shivaji on 13/3/17.
 */
@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router, private auth: AuthService, private route: ActivatedRoute) {

    }

    canActivate(route: ActivatedRouteSnapshot) {

        if (!this.auth.isAuthenticated()) {
            // redirectUrl
            this.router.navigate(['/user/login/' + route.params['id']]);
        } else {
            // const eventExists = this.route.snapshot.data['event'];
            // console.log(eventExists);
            // if (!eventExists) {
            //     this.router.navigate(['/404']);
            // } else {
                return true;
            // }
        }
    }

}