import { User } from 'src/users/models/user.model';
import { createAction, props } from '@ngrx/store';

// create user
export const FETCH_USERS = '[User] Fetch Users';
export const FETCH_USERS_FAIL = '[User] Fetch Users Fail';
export const FETCH_USERS_SUCCESS = '[User] Fetch Users Success';

export const fetchUsers = createAction(
  FETCH_USERS,
  props<{ search?: string }>()
);

export const fetchUsersFail = createAction(
  FETCH_USERS_FAIL,
  props<{ error: string }>()
);

export const fetchUsersSuccess = createAction(
  FETCH_USERS_SUCCESS,
  props<{ users: User[] }>()
);

// Action types
export const fetchUsersActionTypes = {
  fetchUsers,
  fetchUsersFail,
  fetchUsersSuccess,
};
