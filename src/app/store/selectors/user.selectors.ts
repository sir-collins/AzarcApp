import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export interface UserState {
  users: fromUser.State;
}

export const reducers: ActionReducerMap<UserState> = {
  users: fromUser.reducer,
};

export const getUserFeatureState =
  createFeatureSelector<fromUser.State>('userProfile');

export const getCurrentUserId = createSelector(
  getUserFeatureState,
  fromUser.getSelectedUserId
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  getCurrentUserId,
  (state) => state.entities[state.selectedUserId || 1]
);

export const getUsersLoading = createSelector(
  getUserFeatureState,
  (state) => state.loading
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
