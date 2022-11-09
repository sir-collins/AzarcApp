import { createAction, props } from '@ngrx/store';
import { UserProfile } from '../../models/user-profile.model';

// get user
export const GET_USER = '[User] Get User';
export const GET_USER_FAIL = '[User] Get User Fail';
export const GET_USER_SUCCESS = '[User] Get User Success';

export const getUser = createAction(GET_USER);

export const getUserFail = createAction(
  GET_USER_FAIL,
  props<{ error: string }>()
);

export const getUserSuccess = createAction(
  GET_USER_SUCCESS,
  props<{ user: UserProfile }>()
);

// Action types
export const getUserActionTypes = {
  getUser,
  getUserFail,
  getUserSuccess,
};
