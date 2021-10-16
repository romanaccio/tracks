import createDataContext from './createDataContext';
import trackerApi from '../API/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import { navigate } from '../navigation/navigationRef';

export interface StateInterface {
  token: string | null;
  errorMessage: string;
}

interface ActionInterface {
  type: string;
  payload: StateInterface;
}

export interface CredentialsInterface {
  email: string;
  password: string;
}

interface TokenInterface {
  token: string;
}
const defaultState: StateInterface = { token: null, errorMessage: '' };

const authReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };

    case 'sign_up':
      return { ...state, token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signup = (dispatch: Function) => {
  return async ({ email, password }: CredentialsInterface) => {
    // 1. make api request to sign up
    try {
      const response: AxiosResponse<TokenInterface> = await trackerApi.post(
        '/signup',
        { email, password }
      );
      const data = response.data;
      // 2. if successful, save token, update state, then go to main flow
      await AsyncStorage.setItem('token', data.token);
      dispatch({ type: 'sign_up', payload: data.token });
      navigate('Tab', undefined);
    } catch (err) {
      // 3. if error, display an error somehow
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong during sign up',
      });
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
    await AsyncStorage.setItem('token', '');
    dispatch({ type: 'sign_up', payload: '' });
    navigate('Auth', undefined);
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  defaultState
);
