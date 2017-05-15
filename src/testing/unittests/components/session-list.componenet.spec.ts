import {SessionsListComponent} from "../../../app/sessions-list/sessions-list.component";
import {ISession} from "../../../app/model/event.model";
/**
 * Created by Shivaji on 11/5/17.
 */
describe('SessionsListComponent', () => {
    let sessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        sessionListComponent = new SessionsListComponent(mockAuthService, mockVoterService);
    });

    it('ngOnChange Should filter and sort sessions', () => {
        sessionListComponent.sessions = <ISession[]>[
            {name: 'Session 1', level: 'Intermediate'},
            {name: 'Session 3', level: 'Advanced'},
            {name: 'Session 2', level: 'Intermediate'}];
        sessionListComponent.filterBy = 'Intermediate';
        sessionListComponent.sortBy = 'name';
        sessionListComponent.eventId = 3;
        sessionListComponent.ngOnChanges();
        expect(sessionListComponent.visibleSessions.length).toBe(2);
        expect(sessionListComponent.visibleSessions[1].name).toBe('Session 2');
    });
});