import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import {
  Context as LocationContext,
  StateInterface,
} from '../context/LocationContext';
import { FontAwesome } from '@expo/vector-icons';

const Map = () => {
  const locationContext = useContext(LocationContext);
  const state: StateInterface = locationContext.state;
  const { currentLocation, locations } = state;

  console.log(state.locations.length);
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
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
      showsScale={true}
      showsCompass={true}
      zoomEnabled={true}
      // provider='google'
    >
      <Polyline coordinates={locations.map((loc) => loc.coords)}></Polyline>
      <View style={styles.buttonContainer}>
        <FontAwesome.Button
          style={styles.button}
          name='location-arrow'
          size={24}
          onPress={() => console.log('pressed user location icon')}
        />
      </View>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
  activityIndicator: {
    marginTop: 200,
  },
  buttonContainer: {
    flex: 1,
    //justifyContent: 'flex-end',
    marginRight: 10,
    alignItems: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
