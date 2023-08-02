import {createAction, props} from '@ngrx/store';
import {AuthenticationRequest} from '../../services/authentication.service';
import {User} from "../../models/user.model";

export const signIn = createAction('Sign in', props<AuthenticationRequest>());
export const saveToken = createAction('Save token', props<{ jwt: string, rememberMe: boolean }>());
export const getMyself = createAction('Get myself');
export const setUser = createAction('Set user', props<{ user: User | null }>());
export const setUserOnAppInit = createAction('Set user on app init');
export const logout = createAction('Log out');
export const removeToken = createAction('Remove token');
export const setAuthorities = createAction('Set authorities', props<{ authorities: string[] }>());
