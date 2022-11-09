import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/users/models/user.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  user$!: Observable<0 | User | null | undefined>;
  loading$!: Observable<boolean>;

  constructor(
    private store: Store<fromStore.UserState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(fromStore.getCurrentUser);
    this.loading$ = this.store.select(fromStore.getUsersLoading);
  }

  viewItems() {
    this.router.navigate(['/user']);
  }

  newItem() {
    this.router.navigate(['/user/create']);
  }

  updateItem(user: User) {
    this.store.dispatch(fromStore.updateUser({ user }));
  }

  createUser(user: User) {
    this.store.dispatch(fromStore.createUser({ user }));
  }
}
