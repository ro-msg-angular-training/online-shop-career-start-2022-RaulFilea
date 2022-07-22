import { Component } from '@angular/core';
import {admin, user} from "./utils";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shop';
  hasAdminRole = this.authenticationService.hasRoleType(admin);
  isUser = this.authenticationService.hasRoleType(user);

  constructor(
    private authenticationService: AuthenticationService,
  ) {
  }

}
