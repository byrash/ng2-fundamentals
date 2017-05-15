import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {SessionsListComponent} from "../../../app/sessions-list/sessions-list.component";
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {AuthService} from "../../../app/user/auth/auth.service";
import {VoterService} from "../../../app/services/voter.service";
import {ISession} from "../../../app/model/event.model";
import {UpvoteComponent} from "../../../app/upvote/upvote.component";
import {DurationPipe} from "../../../app/common/duration.pipe";
import {CollapsibleWellComponent} from "../../../app/common/collapsible-well.component";
import {By} from "@angular/platform-browser";
/**
 * Created by Shivaji on 12/5/17.
 */
describe('SessionListComponentIT', () => {

    let fixture: ComponentFixture<SessionsListComponent>;
    let sessionListComponent: SessionsListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            currentUser: {userName: 'Shiv'}
        };
        let mockVoterService = {
                hasUserVoted: () => true
            }
        ;

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionsListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: [NO_ERRORS_SCHEMA] // if you dont want your test to fail on missing components
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(SessionsListComponent);
                sessionListComponent = fixture.componentInstance;
                debugEl = fixture.debugElement;
                element = fixture.nativeElement;
            })
            .catch((err) => {
                console.log('Error..!!!' + err);
            });
    }));

    /* beforeEach(() => {
     fixture = TestBed.createComponent(SessionsListComponent);
     sessionListComponent = fixture.componentInstance;
     debugEl = fixture.debugElement;
     element = fixture.nativeElement;
     });*/

    describe('init display', () => {

        it('Should display session header right', () => {
            sessionListComponent.sessions = <ISession[]>[
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
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });

    });

});