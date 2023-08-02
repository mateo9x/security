import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {goRoute, showToast} from './common.action';
import {Router} from '@angular/router';
import {tap} from 'rxjs';
import {SnackBarService} from "../../services/toast.service";

@Injectable()
export class CommonEffects {

  showToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(showToast),
      tap(({message: message, snackBarType: snackBarType}) =>
        this.snackBarService.openSnackBar(message, snackBarType)
      )), {dispatch: false});

  goRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(goRoute),
      tap((routerLink) =>
        this.router.navigate([routerLink.routingLink])
      )), {dispatch: false});

  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBarService: SnackBarService
  ) {
  }

}
