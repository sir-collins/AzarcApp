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
export class UsersGuard implements CanActivate {
  constructor(private store: Store<fromStore.UserState>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getUsersTotal),
      map((total) => !!total && total > 1),
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(fromStore.fetchUsers({}));
        }
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
