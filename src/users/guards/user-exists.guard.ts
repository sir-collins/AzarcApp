import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  filter,
  map,
  Observable,
  switchMap,
  take,
  tap,
  of,
  catchError,
} from 'rxjs';

import * as fromStore from '../store';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserExistsGuard implements CanActivate {
  constructor(private store: Store<fromStore.UserState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkStore(route).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(route: ActivatedRouteSnapshot): Observable<boolean> {
    const _id = parseInt(route.params['userId']);
    return this.store.pipe(
      select(fromStore.getCurrentUser),
      map((user) => {
        return !!user && user.id === _id;
      }),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(fromStore.getUser({ userId: _id }));
        }
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
