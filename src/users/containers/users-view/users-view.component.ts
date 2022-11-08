import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../../models/user.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  users$!: Observable<User[]>;

  viewForm = this.fb.group({
    search: '',
  });

  constructor(
    private store: Store<fromStore.UserState>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.users$ = this.store.select(fromStore.getAllUsers);
  }

  editUser(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  fetchData() {
    const { value } = this.viewForm;
    this.store.dispatch(fromStore.fetchUsers({ search: value.search || '' }));
  }

  deleteUser({ id }: User) {
    if (id) {
      this.store.dispatch(fromStore.deleteUser({ userId: id }));
    }
  }
}
