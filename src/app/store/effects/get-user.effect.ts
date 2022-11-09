import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromGetUser from '../actions/get-user.action';
import * as fromServices from '../../services';

@Injectable()
export class GetUserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromGetUser.getUser),
      switchMap((action) =>
        this.userProfileService.getUser().pipe(
          map((user) => fromGetUser.getUserSuccess({ user })),
          catchError((error) => of(fromGetUser.getUserFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userProfileService: fromServices.UserProfileService
  ) {}
}
