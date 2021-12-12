import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

interface ITrackName {
  trackName: string;
}

const TrackForm = () => {
  const {
    state: { trackName, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer />

      {!recording ? (
        <>
          <Input
            onChangeText={changeName}
            value={trackName}
            placeholder='Enter track name'
            autoCapitalize='words'
            autoCorrect={false}
            clearButtonMode='always'
          />

          <Button title='Start Tracking' onPress={() => startRecording()} />
        </>
      ) : (
        <Button title='Stop Tracking' onPress={() => stopRecording()} />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button title='Save track' onPress={saveTrack}></Button>
      ) : null}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
