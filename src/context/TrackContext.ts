import createDataContext from './createDataContext';
import { LocationObject } from 'expo-location';

export interface StateInterface {
  trackList: string[];
}

export interface ActionInterface {
  type: string;
  payload: StateInterface;
}

const defaultState: StateInterface = {
  trackList: [],
};
const trackReducer = (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTrack = (dispatch: Function) => () => {
  dispatch({
    type: 'fetch_track',
  });
};

const createTrack =
  (dispatch: Function) => (trackName: string, locations: LocationObject[]) => {
    console.log(trackName, locations.length);
    //   dispatch({
    //     type: 'create_track',
    //   });
  };

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  defaultState
);
