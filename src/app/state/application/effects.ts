import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switch';
import 'rxjs/add/observable/timer';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as ApplicationActions from './actions';

@Injectable()
export class ApplicationEffects {

    APPLICATION_TIMEOUT_TIME = 1000 * 5;

    @Effect()
    extendApplicationTimeout$ = this.actions$
        .switchMap( ( action: Action ) => {
            return Observable.timer(this.APPLICATION_TIMEOUT_TIME) 
        })
        .map(() => {
            return new ApplicationActions.LogOut()
        });

    constructor( private actions$: Actions ) {}
}