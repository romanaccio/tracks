import { LocationObject } from 'expo-location';
import createDataContext from './createDataContext';

export interface StateInterface {
  recording: boolean;
  locations: LocationObject[];
  currentLocation: LocationObject | null;
  trackName: string;
}

export interface ActionInterface {
  type: string;
  payload: StateInterface | LocationObject | string;
}

const defaultState: StateInterface = {
  recording: false,
  locations: [],
  currentLocation: null,
  trackName: '',
};

const locationReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case 'add_current_location':
      const newLocations: LocationObject[] = state.locations;
      const newLocation = action.payload as LocationObject;
      if (state.recording) {
        newLocations.push(newLocation);
      }
      return {
        ...state,
        currentLocation: action.payload,
        locations: newLocations,
      };
    case 'start_recording':
      return {
        ...state,
        trackName: action.payload,
        recording: true,
      };
    case 'stop_recording':
      return {
        ...state,
        trackName: '',
        recording: false,
      };
    default:
      return state;
  }
};

const startRecording = (dispatch: Function) => (trackName: string) => {
  dispatch({
    type: 'start_recording',
    payload: trackName,
  });
};
const stopRecording = (dispatch: Function) => () => {
  dispatch({
    type: 'stop_recording',
  });
};

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
