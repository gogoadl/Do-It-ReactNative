import {AppState} from './AppState';
import type {LoginActions} from './actions';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {name: '', email: '', password: ''},
};

export const rootReducer = (
  state: AppState = initialState,
  action: LoginActions,
) => {
  switch (action.type) {
    case 'login':
      return {...state, loggedUser: action.logeedUser, loggedIn: true};
    case 'logout':
      return {initialState};
  }
  return state;
};
