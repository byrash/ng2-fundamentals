import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../model/event.model";
/**
 * Created by Shivaji on 2/4/17.
 */
@Component({
    selector: 'sessions-list',
    templateUrl: 'app/sessions-list/sessions-list.component.html'
})
export class SessionsListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[];


    ngOnChanges() {
        if (this.sessions) {
            this.filterSession();
            let sorter = this.sortBy === 'votes' ? sortByVotes : sortByName;
            this.visibleSessions.sort(sorter);
        }
    }

    filterSession() {
        if (this.filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === this.filterBy;
            });
        }
    }
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}

function sortByName(s1: ISession, s2: ISession) {
    if (s1.name === s2.name) return 0;
    else if (s1.name < s2.name) return -1;
    else if (s1.name > s2.name) return 1;
}