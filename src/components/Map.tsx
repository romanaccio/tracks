import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import {
  Context as LocationContext,
  StateInterface,
} from '../context/LocationContext';

const Map = () => {
  const locationContext = useContext(LocationContext);
  const state: StateInterface = locationContext.state;
  const { currentLocation } = state;

  console.log(state);
  if (!currentLocation) {
    return <ActivityIndicator size='large' style={styles.activityIndicator} />;
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      /*       region={{
        ...currentLocation.coords,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      */
      showsUserLocation={true}
      followsUserLocation={true}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158, 158, 255,1.0)'
        fillColor='rgba(158, 158, 255,0.3)'
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  activityIndicator: {
    marginTop: 200,
  },
});
