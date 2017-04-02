import {Injectable} from "@angular/core";
import {IUser} from "./user.model";
/**
 * Created by Shivaji on 16/3/17.
 */
@Injectable()
export class AuthService {
    currentUser: IUser

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Shiv',
            lastName: 'Byra'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName= firstName;
        this.currentUser.lastName = lastName;
    }
}