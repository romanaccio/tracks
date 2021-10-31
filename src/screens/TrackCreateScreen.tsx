// import '../misc/_mockLocation'; // uncomment to simulate a change of location every second

import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';

import {
  Context as LocationContext,
  StateInterface,
} from '../context/LocationContext';

import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';

const TrackCreateScreens = () => {
  const locationContext = useContext(LocationContext);
  const { startRecording, stopRecording, addLocation } = locationContext;
  const state: StateInterface = locationContext.state;
  const [err] = useLocation(addLocation);

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
