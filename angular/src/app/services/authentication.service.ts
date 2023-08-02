import {Injectable} from '@angular/core';
import {SnackbarService} from './material/snackbar.service';
import {Store} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {logout, setUser, setUserOnAppInit, signIn} from '../state/auth/auth.action';
import {selectUser} from '../state/auth/auth.selector';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private store: Store<AppState>,
    private tokenService: SnackbarService
  ) {
  }

  signInDispatch(request: AuthenticationRequest) {
    this.store.dispatch(signIn(request));
  }

  saveToken(jwt: string, rememberMe: boolean) {
    this.tokenService.saveToken(jwt, rememberMe);
  }

  setUserOnAppInitDispatch() {
    const token = this.tokenService.getToken();
    if (token) {
      this.store.dispatch(setUserOnAppInit());
    }
  }

  updateUser(user: User) {
    return this.store.dispatch(setUser({user: user}));
  }

  getUser() {
    return this.store.select(selectUser);
  }

  logoutDispatch() {
    this.store.dispatch(logout());
    this.removeToken();
  }

  removeToken() {
    this.tokenService.removeToken();
  }
}

export class AuthenticationRequest {
  login: string;
  password: string;
  rememberMe: boolean;

  constructor(login: string, password: string, rememberMe: boolean) {
    this.login = login;
    this.password = password;
    this.rememberMe = rememberMe;
  }
}
