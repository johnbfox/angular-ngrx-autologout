import { Action } from '@ngrx/store';

export const EXTEND_LOGOUT_TIMER = '[Application] Extend the logout timer.';
export const LOG_IN = '[Application] Log In';
export const LOG_OUT = '[Application] Log out';

export class ExtendLogoutTimer implements Action { readonly type = EXTEND_LOGOUT_TIMER; }
export class LogIn implements Action { readonly type = LOG_IN; }
export class LogOut implements Action { readonly type = LOG_OUT; }

export type All
    = ExtendLogoutTimer
    | LogIn
    | LogOut;