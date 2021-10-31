import { LocationObject } from 'expo-location';
import createDataContext from './createDataContext';

export interface StateInterface {
  recording: boolean;
  locations: LocationObject[];
  currentLocation: LocationObject | null;
}

interface ActionInterface {
  type: string;
  payload: StateInterface | LocationObject;
}

const defaultState: StateInterface = {
  recording: false,
  locations: [],
  currentLocation: null,
};

const locationReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'add_current_location':
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

const startRecording = (dispatch: Function) => () => {};
const stopRecording = (dispatch: Function) => () => {};
const addLocation = (dispatch: Function) => (location: LocationObject) => {
  dispatch({
    type: 'add_current_location',
    payload: location,
  });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  defaultState
);
