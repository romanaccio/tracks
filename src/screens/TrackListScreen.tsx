import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListDetailStackParamList } from '../types/types';
import { Text, ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

type Props = NativeStackScreenProps<ListDetailStackParamList, 'TrackList'>;

const TrackListScreen = ({ route, navigation }: Props) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);

  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
      return;
    }, [])
  );

  return (
    <SafeAreaView>
      <FlatList
        data={state.trackList}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', { _id: item._id });
              }}
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
