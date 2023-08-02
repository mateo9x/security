import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "./models/user.model";
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  user: User | null = null;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.setUserOnAppInitDispatch();
    this.startUserSubscription();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startUserSubscription() {
    this.subscription = this.authenticationService.getUser().subscribe((userState) =>
      this.user = userState
    );
  }

  logout() {
    this.authenticationService.logoutDispatch();
  }
}
