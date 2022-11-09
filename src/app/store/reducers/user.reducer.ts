import { UserProfile } from '../../models/user-profile.model';

import * as fromUserActions from '../actions';

import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<UserProfile> {
  selectedUserId: number | null;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<UserProfile> =
  createEntityAdapter<UserProfile>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  error: '',
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(fromUserActions.getUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromUserActions.getUserFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(fromUserActions.getUserSuccess, (state, { user }) => {
    return adapter.setOne(user, {
      ...state,
      loading: false,
      selectedUserId: user.id || null,
    });
  }),
  on(fromUserActions.updateUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromUserActions.updateUserFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(fromUserActions.updateUserSuccess, (state, { user }) => {
    return adapter.upsertOne(user, {
      ...state,
      loading: false,
    });
  })
);

export const getSelectedUserId = (state: State) => state.selectedUserId;

const { selectEntities, selectTotal } = adapter.getSelectors();

// select the dictionary of user entities
export const selectUserEntities = selectEntities;
