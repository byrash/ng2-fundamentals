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
    ToastrService,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventRouteActivator,
    EventListResolver,
    CreateSessionComponent
} from "./index";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {EventsAppComponent} from "./events-app.componenet";
import {AuthService} from "./user/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SessionsListComponent} from "./sessions-list/sessions-list.component";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule, ReactiveFormsModule],
    declarations: [EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionsListComponent],
    providers: [EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        AuthService],
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