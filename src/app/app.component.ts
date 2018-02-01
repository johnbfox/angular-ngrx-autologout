import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import * as fromRoot from './state/reducers';
import * as ApplicationActions from './state/application/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  $isLoggedIn: Observable<boolean>;

  @HostBinding('class.application') class = 'application';
  public constructor (private store: Store<fromRoot.State>){}

  ngOnInit(){
    this.$isLoggedIn = this.store.select(fromRoot.selectIsLoggedIn);
  }

  logIn(){
    this.store.dispatch(new ApplicationActions.LogIn());
  }

  extendLogout(){
    this.store.dispatch(new ApplicationActions.ExtendLogoutTimer());
  }
}
