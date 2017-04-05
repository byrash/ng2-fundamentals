import {Component} from "@angular/core";
import {AuthService} from "../user/auth/auth.service";
import {ISession} from "../model/event.model";
import {EventService} from "../services/event.service";
/**
 * Created by Shivaji on 12/3/17.
 */

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {
            font-size: 15px;
        }

        #searchForm {
            margin-right: 100px;
        }

        ,
        @media (max-width: 1200px) {
            #searchForm {
                display: none
            }
        }

        li > a.active {
            color: #F97924;
        }
    `]
})
export class NavBarComponent {
    searchTerm: string = '';
    foundSessions: ISession[] = [];

    constructor(private authService: AuthService, private eventService: EventService) {

    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        });
    }
}