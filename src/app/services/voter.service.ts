import {Injectable} from "@angular/core";
import {ISession} from "../model/event.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
/**
 * Created by Shivaji on 9/4/17.
 */
@Injectable()
export class VoterService {

    constructor(private http: Http) {
    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        let url = `http://localhost:8080/event/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url).catch(this.handleError).subscribe(
            () => {
                session.voters = session.voters.filter(voter => voter != voterName);
            }
        );
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        let url = `http://localhost:8080/event/${eventId}/sessions/${session.id}/voters/${voterName}`;
        console.log(url);
        this.http.post(url, {}).catch(this.handleError).subscribe(
            () => session.voters.push(voterName)
        );
    }

    hasUserVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}