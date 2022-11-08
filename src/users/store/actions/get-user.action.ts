import { createAction, props } from '@ngrx/store';
import { User } from 'src/users/models/user.model';

// get user
export const GET_USER = '[User] Get User';
export const GET_USER_FAIL = '[User] Get User Fail';
export const GET_USER_SUCCESS = '[User] Get User Success';

export const getUser = createAction(GET_USER, props<{ userId: number }>());

export const getUserFail = createAction(
  GET_USER_FAIL,
  props<{ error: string }>()
);

export const getUserSuccess = createAction(
  GET_USER_SUCCESS,
  props<{ user: User }>()
);

// Action types
export const getUserActionTypes = {
  getUser,
  getUserFail,
  getUserSuccess,
};
