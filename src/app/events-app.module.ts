/**
 * Created by Shivaji on 12/3/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventService,
    TOASTR_TOKEN,
    JQ_TOKEN,
    Toastr,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventRouteActivator,
    EventListResolver,
    EventResolver,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from "./index";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {EventsAppComponent} from "./events-app.componenet";
import {AuthService} from "./user/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SessionsListComponent} from "./sessions-list/sessions-list.component";
import {HttpModule} from "@angular/http";

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule, ReactiveFormsModule,
        HttpModule],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionsListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator],
    providers: [EventService,
        {provide: TOASTR_TOKEN, useValue: toastr},
        {provide: JQ_TOKEN, useValue: jQuery},
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventResolver,
        EventListResolver, // Short notation of below mode
        {provide: AuthService, useClass: AuthService},// Long hand notation
        VoterService],
    bootstrap: [EventsAppComponent]
})

export class EventsAppModule {

}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}