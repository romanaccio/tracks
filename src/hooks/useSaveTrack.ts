import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

// this hook is used to combine LocationContext and TrackContext
// in order to save tracks to the database
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { trackName, locations },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(trackName, locations);
  };
  return [saveTrack];
};
