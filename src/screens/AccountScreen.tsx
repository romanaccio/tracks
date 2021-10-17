import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
