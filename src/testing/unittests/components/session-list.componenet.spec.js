"use strict";
var sessions_list_component_1 = require("../../../app/sessions-list/sessions-list.component");
/**
 * Created by Shivaji on 11/5/17.
 */
describe('SessionsListComponent', function () {
    var sessionListComponent;
    var mockAuthService, mockVoterService;
    beforeEach(function () {
        sessionListComponent = new sessions_list_component_1.SessionsListComponent(mockAuthService, mockVoterService);
    });
    it('ngOnChange Should filter and sort sessions', function () {
        sessionListComponent.sessions = [
            { name: 'Session 1', level: 'Intermediate' },
            { name: 'Session 3', level: 'Advanced' },
            { name: 'Session 2', level: 'Intermediate' }];
        sessionListComponent.filterBy = 'Intermediate';
        sessionListComponent.sortBy = 'name';
        sessionListComponent.eventId = 3;
        sessionListComponent.ngOnChanges();
        expect(sessionListComponent.visibleSessions.length).toBe(2);
        expect(sessionListComponent.visibleSessions[1].name).toBe('Session 2');
    });
});
//# sourceMappingURL=session-list.componenet.spec.js.map