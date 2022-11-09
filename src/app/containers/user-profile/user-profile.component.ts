import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../../models/user-profile.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user$!: Observable<0 | UserProfile | null | undefined>;
  loading$!: Observable<boolean>;

  constructor(
    private store: Store<fromStore.UserState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromStore.getCurrentUser);
    this.loading$ = this.store.select(fromStore.getUsersLoading);
  }
  updateItem(user: UserProfile) {
    this.store.dispatch(fromStore.updateUser({ user }));
  }
}
