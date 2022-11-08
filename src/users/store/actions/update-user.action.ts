import { createAction, props } from '@ngrx/store';
import { User } from 'src/users/models/user.model';

// update user
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_FAIL = '[User] Update User Fail';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';

export const updateUser = createAction(UPDATE_USER, props<{ user: User }>());

export const updateUserFail = createAction(
  UPDATE_USER_FAIL,
  props<{ error: string }>()
);

export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ user: User }>()
);

// Action types
export const updateUserActionTypes = {
  updateUser,
  updateUserFail,
  updateUserSuccess,
};
