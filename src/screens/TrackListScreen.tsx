import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ListDetailStackParamList } from '../types/types';
type Props = NativeStackScreenProps<ListDetailStackParamList, 'TrackList'>;

const TrackListScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title='go to Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
