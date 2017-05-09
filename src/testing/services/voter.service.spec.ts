import {VoterService} from "../../app/services/voter.service";
import {ISession} from "../../app/model/event.model";
import {Observable} from "rxjs/Rx";
/**
 * Created by Shivaji on 9/5/17.
 */

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp: any;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete'])
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {

        it('Should remove voter form the voter list', () => {
            let sessions = {id: 6, voters: ['Shiv', 'Aswath']};
            mockHttp.delete.and.returnValue(Observable.of(false));
            voterService.deleteVoter(3, <ISession>sessions, 'Shiv')
            expect(sessions.voters.length).toBe(1);
            expect(sessions.voters[0]).toBe('Aswath');
        });
    });


});