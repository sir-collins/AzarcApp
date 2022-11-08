import { User } from 'src/users/models/user.model';
import { createAction, props } from '@ngrx/store';

// create user
export const CREATE_USER = '[User] Create User';
export const CREATE_USER_FAIL = '[User] Create User Fail';
export const CREATE_USER_SUCCESS = '[User] Create User Success';

export const createUser = createAction(CREATE_USER, props<{ user: User }>());

export const createUserFail = createAction(
  CREATE_USER_FAIL,
  props<{ error: string }>()
);

export const createUserSuccess = createAction(
  CREATE_USER_SUCCESS,
  props<{ user: User }>()
);

// Action types
export const createUserActionTypes = {
  createUser,
  createUserFail,
  createUserSuccess,
};
