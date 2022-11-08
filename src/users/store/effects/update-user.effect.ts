import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromUpdateUser from '../actions/update-user.action';
import * as fromServices from '../../services';

@Injectable()
export class UpdateUserEffects {
  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUpdateUser.updateUser),
      switchMap((action) =>
        this.userService.updateUser(action.user).pipe(
          map(() => fromUpdateUser.updateUserSuccess({ user: action.user })),
          catchError((error) => of(fromUpdateUser.updateUserFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}
}
