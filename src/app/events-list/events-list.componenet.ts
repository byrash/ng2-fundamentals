import {Component, OnInit} from "@angular/core";
import {EventService} from "../services/event.service";
import {ToastrService} from "../services/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../model/event.model";
/**
 * Created by Shivaji on 12/3/17.
 */

@Component({
    template: `
        <div>
            <h1>Upcoming events list</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail 
                            (click)="handleThumbnailClick(event.name)"
                            [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
       `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService,
                private toastrService: ToastrService,
                private route: ActivatedRoute) {
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }
}