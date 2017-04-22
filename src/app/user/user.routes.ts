import {Routes} from "@angular/router";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
/**
 * Created by Shivaji on 14/3/17.
 */
export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login/:eventId', component: LoginComponent},
    {path: 'login', component: LoginComponent}
];