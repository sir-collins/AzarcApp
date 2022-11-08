import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromFetchUsers from '../actions/fetch-users.action';
import * as fromServices from '../../services';

@Injectable()
export class FetchUsersEffects {
  fetchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFetchUsers.fetchUsers),
      switchMap((payload) =>
        this.userService.getUsers(payload.search).pipe(
          map((users) => fromFetchUsers.fetchUsersSuccess({ users })),
          catchError((error) => of(fromFetchUsers.fetchUsersFail(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}
}
