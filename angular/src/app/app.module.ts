import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {InfoComponent} from "./components/info/info.component";
import {NotFoundComponent} from "./handlers/not-found/not-found.component";
import {metaReducers, reducers} from "./state/app.reducers";
import {AuthEffects} from "./state/auth/auth.effects";
import {AppInterceptor} from "./settings/app.interceptor";
import {SignInComponent} from "./components/authentication/sign-in/sign-in.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {AnonymousGuard} from "./settings/anonymous.guard";
import {LoginGuard} from "./settings/login.guard";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NotFoundComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    LoginGuard,
    AnonymousGuard,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'fill', color: 'primary'}
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 4500,
        horizontalPosition: "center",
        verticalPosition: "top"
      }
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: false}
    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
