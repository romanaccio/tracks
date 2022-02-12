import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListDetailStackParamList } from '../types/types';
import {
  Context as TrackContext,
  StateInterface,
} from '../context/TrackContext';

import MapView, { Polyline, Circle } from 'react-native-maps';

type Props = NativeStackScreenProps<ListDetailStackParamList, 'TrackDetail'>;
const TrackDetailScreen = ({ route, navigation }: Props) => {
  const _id = route.params?._id;
  const trackContext = useContext(TrackContext);
  const state: StateInterface = trackContext.state;
  const track = state.trackList.find((t) => t._id === _id);
  const initialCoords = track
    ? track.locations[0].coords
    : { latitude: 0, longitude: 0 };
  return (
    <SafeAreaView>
      <Text h2>{track ? track.name : 'unknown track name'}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {track ? (
          <Polyline
            coordinates={track.locations.map((loc) => loc.coords)}
          ></Polyline>
        ) : null}
      </MapView>
    </SafeAreaView>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
