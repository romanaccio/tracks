import createDataContext from './createDataContext';
import { LocationObject } from 'expo-location';
import trackerApi from '../API/tracker';

interface TrackInterface {
  _id: string;
  name: string;
  locations: LocationObject[];
}
export interface StateInterface {
  trackList: TrackInterface[];
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
    case 'fetch_tracks':
      return { trackList: action.payload };

    default:
      return state;
  }
};

const fetchTracks = (dispatch: Function) => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({
    type: 'fetch_tracks',
    payload: response.data,
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
  { fetchTracks, createTrack },
  defaultState
);
