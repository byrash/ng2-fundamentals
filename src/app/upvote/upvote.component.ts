import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by Shivaji on 9/4/17.
 */
@Component({
    selector: 'upvote',
    templateUrl: 'app/upvote/upvote.component.html',
    styleUrls: ['app/upvote/upvote.component.css']
})
export class UpvoteComponent {
    @Output() vote = new EventEmitter();
    @Input() count: number;

    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }

    iconColor: string;

    onClick() {
        this.vote.emit({});
    }

}