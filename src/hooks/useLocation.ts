import { useState, useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

export default (shouldTrack: boolean, callback: Function) => {
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    let subscriber: any = null;
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

        subscriber = localSubscriber;
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
      console.log('useLocation: stopped watching position');
    }
    return () => {
      if (subscriber) {
        subscriber.remove(); // this code avoids running startWatching many times in //
      }
    };
  }, [shouldTrack]);

  return [err];
};
