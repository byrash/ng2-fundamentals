import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
/**
 * Created by Shivaji on 14/3/17.
 */
@Component({
    templateUrl: 'app/user/login/login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px
        }
    `]
})
export class LoginComponent implements OnInit {
    redirectUrl: String = 'events';
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if (!resp) {
                this.loginInvalid = true;
            } else {
                this.router.navigate([this.redirectUrl]);
            }
        });

    }

    cancel() {
        this.router.navigate([this.redirectUrl]);
    }


    ngOnInit(): void {
        this.route.params.forEach((param: Params) => {
            if (param['eventId']) {
                this.redirectUrl = 'event/' + param['eventId'];
            } else {
                this.redirectUrl = 'events';
            }
        });
    }
}