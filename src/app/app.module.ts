import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducers } from './state/reducers';
import { ApplicationEffects } from './state/application/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ApplicationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
