import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth/auth.service';
/**
 * Created by Shivaji on 12/3/17.
 */

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})

export class EventsAppComponent implements OnInit {

    constructor(private auth: AuthService) {
    }


    ngOnInit(): void {
        this.auth.identify();
    }
}
