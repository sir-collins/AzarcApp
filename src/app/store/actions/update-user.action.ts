import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../../models/user-profile.model';

// update user
export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_FAIL = '[User] Update User Fail';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';

export const updateUser = createAction(
  UPDATE_USER,
  props<{ user: UserProfile }>()
);

export const updateUserFail = createAction(
  UPDATE_USER_FAIL,
  props<{ error: string }>()
);

export const updateUserSuccess = createAction(
  UPDATE_USER_SUCCESS,
  props<{ user: UserProfile }>()
);

// Action types
export const updateUserActionTypes = {
  updateUser,
  updateUserFail,
  updateUserSuccess,
};
