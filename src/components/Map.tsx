import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122 + i * 0.001,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
