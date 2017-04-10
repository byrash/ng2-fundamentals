import {Injectable} from "@angular/core";
import {ISession} from "../model/event.model";
/**
 * Created by Shivaji on 9/4/17.
 */
@Injectable()
export class VoterService{

    deleteVoter(session:ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter != voterName);
    }

    addVoter(session:ISession, voterName: string){
        session.voters.push(voterName);
    }

    hasUserVoted(session:ISession, voterName: string){
        return session.voters.some(voter => voter === voterName);
    }

}