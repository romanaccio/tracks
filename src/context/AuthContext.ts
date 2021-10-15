import createDataContext from './createDataContext';
import trackerApi from '../API/tracker';

export interface StateInterface {
  isSignedin: boolean;
}

interface ActionInterface {
  type: string;
  payload: StateInterface;
}

export interface CredentialsInterface {
  email: string;
  password: string;
}

const defaultState: StateInterface = { isSignedin: false };

const authReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'sign_in':
      return action.payload;
    default:
      return state;
  }
};

const signup = (dispatch: Function) => {
  return async ({ email, password }: CredentialsInterface) => {
    // 1. make api request to sign up
    try {
      const response = trackerApi.post('/signup', { email, password });
      // 2. if successful, update state
      console.log((await response).data);
      //dispatch({ type: 'sign_out', payload: true });
    } catch (err) {
      // 3. if error, display an error somehow
      console.log(err);
    }
  };
};
const signin = (dispatch: Function) => {
  return async ({ email, password }: CredentialsInterface) => {
    // 1. make api request to sign in
    // 2. if successful, update state
    // 3. if error, display an error somehow
    // dispatch({ type: 'sign_in', payload: true });
  };
};

const signout = (dispatch: Function) => {
  return async () => {
    // 1. do something to sign out
    // 2. if successful, update state
    // 3. if error, display an error somehow
    // dispatch({ type: 'sign_out', payload: true });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  defaultState
);
