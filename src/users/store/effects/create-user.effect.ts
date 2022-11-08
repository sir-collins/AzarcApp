import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromCreateUser from '../actions/create-user.action';
import * as fromServices from '../../services';

@Injectable()
export class CreateUserEffects {
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCreateUser.createUser),
      concatMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((user) => fromCreateUser.createUserSuccess({ user })),
          catchError((error) => of(fromCreateUser.createUserFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}
}
