import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ListDetailStackParamList } from '../types/types';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<ListDetailStackParamList, 'TrackList'>;

const TrackListScreen = ({ route, navigation }: Props) => {
  return (
    <SafeAreaView>
      <Text>TrackListScreen</Text>
      <Button
        title='go to Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </SafeAreaView>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
