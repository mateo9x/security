import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from "./components/info/info.component";
import {NotFoundComponent} from "./handlers/not-found/not-found.component";
import {AnonymousGuard} from "./settings/anonymous.guard";
import {SignInComponent} from "./components/authentication/sign-in/sign-in.component";

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    title: 'Info'
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [AnonymousGuard],
    title: 'Sign in'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
