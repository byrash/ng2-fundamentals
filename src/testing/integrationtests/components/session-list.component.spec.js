"use strict";
var testing_1 = require("@angular/core/testing");
var sessions_list_component_1 = require("../../../app/sessions-list/sessions-list.component");
var core_1 = require("@angular/core");
var auth_service_1 = require("../../../app/user/auth/auth.service");
var voter_service_1 = require("../../../app/services/voter.service");
var upvote_component_1 = require("../../../app/upvote/upvote.component");
var duration_pipe_1 = require("../../../app/common/duration.pipe");
var collapsible_well_component_1 = require("../../../app/common/collapsible-well.component");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by Shivaji on 12/5/17.
 */
describe('SessionListComponentIT', function () {
    var fixture;
    var sessionListComponent;
    var element;
    var debugEl;
    beforeEach(testing_1.async(function () {
        var mockAuthService = {
            currentUser: { userName: 'Shiv' }
        };
        var mockVoterService = {
            hasUserVoted: function () { return true; }
        };
        testing_1.TestBed.configureTestingModule({
            imports: [],
            declarations: [
                sessions_list_component_1.SessionsListComponent,
                upvote_component_1.UpvoteComponent,
                duration_pipe_1.DurationPipe,
                collapsible_well_component_1.CollapsibleWellComponent
            ],
            providers: [
                { provide: auth_service_1.AuthService, useValue: mockAuthService },
                { provide: voter_service_1.VoterService, useValue: mockVoterService }
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA] // if you dont want your test to fail on missing components
        }).compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(sessions_list_component_1.SessionsListComponent);
            sessionListComponent = fixture.componentInstance;
            debugEl = fixture.debugElement;
            element = fixture.nativeElement;
        })
            .catch(function (err) {
            console.log('Error..!!!' + err);
        });
    }));
    /* beforeEach(() => {
     fixture = TestBed.createComponent(SessionsListComponent);
     sessionListComponent = fixture.componentInstance;
     debugEl = fixture.debugElement;
     element = fixture.nativeElement;
     });*/
    describe('init display', function () {
        it('Should display session header right', function () {
            sessionListComponent.sessions = [
                {
                    id: 3,
                    name: 'Session 1',
                    level: 'Intermediate',
                    presenter: 'Shiv',
                    duration: 1,
                    abstract: 'abstract',
                    voters: ['john', 'bob']
                }
            ];
            sessionListComponent.filterBy = 'all';
            sessionListComponent.sortBy = 'name';
            sessionListComponent.eventId = 4;
            sessionListComponent.ngOnChanges();
            fixture.detectChanges();
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(platform_browser_1.By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});
//# sourceMappingURL=session-list.component.spec.js.map