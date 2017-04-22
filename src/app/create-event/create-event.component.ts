import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "../services/event.service";
/**
 * Created by Shivaji on 13/3/17.
 */

@Component({
    templateUrl: 'app/create-event/create-event.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10pc;
        }

        .error input {
            background-color: #E3C3C5;
        }

        .error ::-webkit-input-placeholder {
            color: #999;
        }

        .error ::-moz-placeholder {
            color: #999;
        }

        .error :-ms-input-placeholder {
            color: #999;
        }
    `]
})
export class CreateEventComponent {

    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(event => {
            this.isDirty = false;
            this.router.navigate(['/events'])
        });
    }

    cancel() {
        this.router.navigate(['/events-list']);
    }
}