import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign out from Tracker</Text>
      </Spacer>
      <Spacer>
        <Text h4>Hi {state.email}</Text>
      </Spacer>
      <Button
        title='Sign Out'
        onPress={() => {
          signout();
        }}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});
