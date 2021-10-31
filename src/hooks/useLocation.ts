import { useState, useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack: boolean, callback: Function) => {
  const [err, setErr] = useState<any>(null);
  const [subscriber, setSubscriber] = useState<any>(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const localSubscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          callback(location);
        }
      );
      console.log('useLocation: started watching position');

      setSubscriber(localSubscriber);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
      console.log('useLocation: stopped watching position');
    }
  }, [shouldTrack]);

  return [err];
};
