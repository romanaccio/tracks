import createDataContext from './createDataContext';
import trackerApi from '../API/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import { navigate } from '../navigation/navigationRef';

export interface StateInterface {
  token: string | null;
  errorMessage: string;
  email: string;
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
const defaultState: StateInterface = {
  token: null,
  errorMessage: '',
  email: '',
};

const authReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'update_error_message':
      return { ...state, errorMessage: action.payload.errorMessage };

    case 'update_credentials':
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        errorMessage: '',
      };
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
      const token = data.token;
      // 2. if successful, save credentials, update state, then go to main flow
      const jsonValue = JSON.stringify({ email, token });
      await AsyncStorage.setItem('credentials', jsonValue);
      dispatch({
        type: 'update_credentials',
        payload: { token, email },
      });
      navigate('Tab', undefined);
    } catch (err) {
      // 3. if error, display an error somehow
      console.log(err);
      dispatch({
        type: 'update_error_message',
        payload: { errorMessage: 'Something went wrong during sign up' },
      });
    }
  };
};
const signin = (dispatch: Function) => {
  return async ({ email, password }: CredentialsInterface) => {
    // 1. make api request to sign in
    try {
      const response: AxiosResponse<TokenInterface> = await trackerApi.post(
        '/signin',
        { email, password }
      );
      const data = response.data;
      const token = data.token;
      // 2. if successful, save credentials, update state, then go to main flow
      const jsonValue = JSON.stringify({ email, token });
      await AsyncStorage.setItem('credentials', jsonValue);
      dispatch({
        type: 'update_credentials',
        payload: { token, email },
      });
      navigate('Tab', undefined);
    } catch (err) {
      // 3. if error, display an error somehow
      console.log(err);
      dispatch({
        type: 'update_error_message',
        payload: { errorMessage: 'Something went wrong during sign in' },
      });
    }
  };
};

const signout = (dispatch: Function) => async () => {
  // 1. do something to sign out
  await AsyncStorage.setItem('credentials', '');
  dispatch({ type: 'update_credentials', payload: { token: '', email: '' } });
  navigate('Auth', undefined);
};

const clearErrorMessage = (dispatch: Function) => async () => {
  dispatch({
    type: 'update_error_message',
    payload: { errorMessage: '' },
  });
};

const tryLocalSignin = (dispatch: Function) => async () => {
  const jsonValue = await AsyncStorage.getItem('credentials');

  if (jsonValue) {
    const { token, email } = JSON.parse(jsonValue);
    dispatch({
      type: 'update_credentials',
      payload: { token, email },
    });
    navigate('Tab', undefined);
  } else {
    navigate('Auth', undefined);
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  defaultState
);
