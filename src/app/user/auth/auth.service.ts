import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Res} from "awesome-typescript-loader/dist/checker/protocol";
import {isUndefined} from "util";
/**
 * Created by Shivaji on 16/3/17.
 */
@Injectable()
export class AuthService {
    currentUser: IUser

    constructor(private http: Http) {
    }

    loginUser(userName: string, password: string) {
        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'Shiv @'+userName,
        //     lastName: 'Byra'
        // }
        let loginInfo = {uname: userName, pwd: password};
        return this.http.post('http://localhost:8080/login', JSON.stringify(loginInfo))
        //Do does not subscribe and will wait work on response once when some one subscribes to it
            .do((resp: Response) => {
                if (resp) {// If not an error
                    this.currentUser = <IUser>resp.json();
                }
            }).catch((resp: Response) => {
                //It will be an error on unautheticated case and we wanted to send the caller that
                // its not an error and want to send false
                return Observable.of(false);
            });
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        return this.http.put(`http://localhost:8080/user/${this.currentUser.id}`, this.currentUser);
    }

    identify() {
        return this.http.get('http://localhost:8080/identify').map((resp: any) => {
            if (resp._body) {
                return resp.json();
            } else {
                return {};
            }
        }).do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        }).subscribe();
    }

    logout() {
        return this.http.post('http://localhost:8080/logout', {}).do(() => {
            this.currentUser = undefined;
        });
    }
}