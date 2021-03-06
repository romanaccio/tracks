// import '../misc/_mockLocation'; // uncomment to simulate a change of location every second

import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import {
  Context as LocationContext,
  StateInterface,
} from '../context/LocationContext';

import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreens = () => {
  const locationContext = useContext(LocationContext);
  const { addLocation } = locationContext;
  const state: StateInterface = locationContext.state;
  // console.log('TrackCreateScreen.tsx: state', state);
  const { recording } = state;
  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused || recording, addLocation);

  return (
    <SafeAreaView>
      <Text h2>TrackCreateScreens</Text>
      <Map></Map>
      <TrackForm />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreens;

const styles = StyleSheet.create({});
