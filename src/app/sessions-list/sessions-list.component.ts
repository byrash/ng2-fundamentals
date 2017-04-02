import {Component, Input} from "@angular/core";
import {ISession} from "../model/event.model";
/**
 * Created by Shivaji on 2/4/17.
 */
@Component({
    selector: 'sessions-list',
    templateUrl:'app/sessions-list/sessions-list.component.html'
})
export class SessionsListComponent{
    @Input() sessions:ISession[];
}