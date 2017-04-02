import {Component} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
/**
 * Created by Shivaji on 14/3/17.
 */
@Component({
    templateUrl: 'app/user/login/login.component.html',
    styles:[`
        em {float: right; color: #E05C65; padding-left: 10px}
        `]
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}