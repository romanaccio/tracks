import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { requestForegroundPermissionsAsync } from 'expo-location';

import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
const TrackCreateScreens = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreens</Text>
      <Map></Map>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreens;

const styles = StyleSheet.create({});
