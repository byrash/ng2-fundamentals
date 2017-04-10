import {Component, Input, OnChanges} from "@angular/core";
import {ISession} from "../model/event.model";
import {AuthService} from "../user/auth/auth.service";
import {VoterService} from "../services/voter.service";
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

    constructor(private auth: AuthService, private voterService: VoterService) {

    }


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

    toggelVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.getCurrentUserName());
        } else {
            this.voterService.addVoter(session, this.getCurrentUserName());
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.hasUserVoted(session, this.getCurrentUserName());
    }

    private getCurrentUserName(): string {
        return this.auth.currentUser.userName;
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