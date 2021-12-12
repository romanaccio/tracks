import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
//import { navigateListDetail } from '../navigation/navigationRef';

// this hook is used to combine LocationContext and TrackContext
// in order to save tracks to the database
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { trackName, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(trackName, locations);
    reset();
    //navigateListDetail('TrackList', undefined);
  };
  return [saveTrack];
};
