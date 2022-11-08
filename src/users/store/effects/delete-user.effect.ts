import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromDeleteUser from '../actions/delete-user.action';
import * as fromServices from '../../services';

@Injectable()
export class DeleteUserEffects {
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromDeleteUser.deleteUser),
      concatMap((action) =>
        this.userService.deleteUser(action.userId).pipe(
          map(() =>
            fromDeleteUser.deleteUserSuccess({ userId: action.userId })
          ),
          catchError((error) => of(fromDeleteUser.deleteUserFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}
}
