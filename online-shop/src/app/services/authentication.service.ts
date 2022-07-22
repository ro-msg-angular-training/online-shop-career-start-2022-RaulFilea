import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {User, UserRoles} from "../models/users";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Credentials} from "../models/Credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedUser: User | undefined;
  redirectUrl: string | undefined;

  constructor(private http: HttpClient) {
  }

  login(credentials: Credentials): Observable<User> {
    return this.http.post<User>(environment.backendURL + '/login', credentials).pipe(tap((user) => {
      this.loggedUser = user;
      localStorage.setItem("username", user.username);
      localStorage.setItem("logged", this.loggedIn().toString());
    }));
  }

  loggedIn(): boolean {
    return this.loggedUser !== undefined;
  }

  hasRoleType(role: string) {
    if (this.loggedUser?.roles.includes(<UserRoles>role))
      return true;
    return false;
  }

}
