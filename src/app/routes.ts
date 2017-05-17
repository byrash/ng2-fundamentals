import {EventsListComponent} from './events-list/events-list.componenet';
import {EventDetailsComponent} from './event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component';
import {Error404Component} from './common/error.component';
import {EventRouteActivator} from './services/event-route-activator.service';
import {EventListResolver} from './services/events-list-resolver.service';
import {CreateSessionComponent} from './create-session/create-session.component';
import {EventResolver} from './services/event-resolver.service';
/**
 * Created by Shivaji on 13/3/17.
 */

export const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventResolver}, canActivate: [EventRouteActivator]},
    // {path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: 'event/create-session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];
