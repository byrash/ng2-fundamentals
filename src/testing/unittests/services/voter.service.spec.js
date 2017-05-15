"use strict";
var voter_service_1 = require("../../../app/services/voter.service");
var Rx_1 = require("rxjs/Rx");
/**
 * Created by Shivaji on 9/5/17.
 */
describe('VoterService', function () {
    var voterService;
    var mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);
        voterService = new voter_service_1.VoterService(mockHttp);
    });
    describe('deleteVoter', function () {
        it('Should remove voter form the voter list', function () {
            var sessions = { id: 6, voters: ['Shiv', 'Aswath'] };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            voterService.deleteVoter(3, sessions, 'Shiv');
            expect(sessions.voters.length).toBe(1);
            expect(sessions.voters[0]).toBe('Aswath');
        });
        it('Should call http delete method', function () {
            var sessions = { id: 6, voters: ['Shiv', 'Aswath'] };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            voterService.deleteVoter(3, sessions, 'Shiv');
            expect(mockHttp.delete).toHaveBeenCalledWith('http://localhost:8080/event/3/sessions/6/voters/Shiv');
        });
        it('Should call http delete method', function () {
            var sessions = { id: 6, voters: ['Aswath'] };
            mockHttp.post.and.returnValue(Rx_1.Observable.of(false));
            voterService.addVoter(3, sessions, 'Shiv');
            expect(mockHttp.post).toHaveBeenCalledWith('http://localhost:8080/event/3/sessions/6/voters/Shiv', jasmine.any(Object));
        });
    });
});
//# sourceMappingURL=voter.service.spec.js.map