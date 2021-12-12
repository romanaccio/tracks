import createDataContext from './createDataContext';
import { LocationObject } from 'expo-location';
import trackerApi from '../API/tracker';

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
  (dispatch: Function) =>
  async (trackName: string, locations: LocationObject[]) => {
    await trackerApi.post('/tracks', {
      name: trackName,
      locations,
    });
    // dispatch({
    //   type: 'create_track',
    //   payload: {
    //     trackList: [...state.trackList, trackName],
    //   },
    // });
  };

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  defaultState
);
