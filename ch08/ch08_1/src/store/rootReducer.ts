import {AppState} from './AppState';
import type {LoginActions} from './actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {name: '', email: '', password: ''},
};

export const rootReducer = (
  state: AppState = initialState,
  actions: LoginActions,
) => {
  return state;
};
