import {Component, OnInit} from "@angular/core";
import {EventService} from "../services/event.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IEvent, ISession} from "../model/event.model";
/**
 * Created by Shivaji on 13/3/17.
 */

@Component({
    templateUrl: 'app/event-details/event-details.component.html',
    styles: [`
        .container {
            padding-left: 20px;
            padding-right: 20px
        }

        .event-image {
            height: 100px;
        }

        a {
            cursor: pointer
        }
    `]
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addSessionMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            if (!data['event']) {
                this.router.navigate(['/404']);
            }
            this.event = data['event'];
            this.resetState();
        });

        // this.route.params.forEach((param: Params) => {
        //
        //     this.eventService.getEvent(+param['id']).subscribe((event: IEvent) => {
        //         this.event = event;
        //         this.resetState();
        //     });
        //     // this.event = this.eventService.getEvent(+param['id']);
        // });
        //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    private resetState() {
        this.addSessionMode = false;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }

    addSession() {
        this.addSessionMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addSessionMode = false;
    }

    cancelAddSession() {
        this.addSessionMode = false;
    }
}