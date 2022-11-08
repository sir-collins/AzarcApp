import { createAction, props } from '@ngrx/store';

// delete user
export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_FAIL = '[User] Delete User Fail';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';

export const deleteUser = createAction(
  DELETE_USER,
  props<{ userId: number }>()
);

export const deleteUserFail = createAction(
  DELETE_USER_FAIL,
  props<{ error: string }>()
);

export const deleteUserSuccess = createAction(
  DELETE_USER_SUCCESS,
  props<{ userId: number }>()
);

// Action types
export const deleteUserActionTypes = {
  deleteUser,
  deleteUserFail,
  deleteUserSuccess,
};
