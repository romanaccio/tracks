import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

interface ITrackName {
  trackName: string;
}

type Props = {
  startTracking(trackName: string): Function;
  stopTracking(): Function;
  recording: boolean;
  hasData: boolean;
};
const TrackForm = ({
  startTracking,
  stopTracking,
  recording,
  hasData,
}: Props) => {
  const [trackName, setTrackName] = useState('');
  const [saveTrack] = useSaveTrack();

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
      <Spacer />
      {!recording && hasData ? (
        <Button title='Save track' onPress={saveTrack}></Button>
      ) : null}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
