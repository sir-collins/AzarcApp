import { User } from 'src/users/models/user.model';

import * as fromUserActions from '../actions';

import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<User> {
  selectedUserId: number | null;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
  error: '',
  loading: false,
});

export const reducer = createReducer(
  initialState,
  on(fromUserActions.createUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromUserActions.createUserFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(fromUserActions.createUserSuccess, (state, { user }) => {
    return adapter.addOne(user, {
      ...state,
      loading: false,
    });
  }),
  on(fromUserActions.deleteUser, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromUserActions.deleteUserFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(fromUserActions.deleteUserSuccess, (state, { userId }) => {
    return adapter.removeOne(userId, {
      ...state,
      loading: false,
    });
  }),

  on(fromUserActions.fetchUsers, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fromUserActions.fetchUsersFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      error,
    };
  }),
  on(fromUserActions.fetchUsersSuccess, (state, { users }) => {
    return adapter.setAll(users, {
      ...state,
      loading: false,
    });
  }),
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

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;
