import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

interface ITrackName {
  trackName: string;
}

type Props = {
  startTracking(trackName: string): Function;
  stopTracking(): Function;
  recording: boolean;
};
const TrackForm = ({ startTracking, stopTracking, recording }: Props) => {
  const [trackName, setTrackName] = useState('');

  return (
    <>
      <Spacer />

      {!recording ? (
        <>
          <Input
            onChangeText={setTrackName}
            value={trackName}
            placeholder='Enter track name'
            autoCapitalize='words'
            autoCorrect={false}
            clearButtonMode='always'
          />

          <Button
            title='Start Tracking'
            onPress={() => startTracking(trackName)}
          />
        </>
      ) : (
        <Button title='Stop Tracking' onPress={() => stopTracking()} />
      )}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
