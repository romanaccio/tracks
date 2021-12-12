import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { tabNavigate } from '../navigation/tabNavigationRef';

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
    console.log('saveTrack: trying to navigate to list detail');
    tabNavigate('ListDetail', undefined);
  };
  return [saveTrack];
};
