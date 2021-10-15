import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../types/types';
type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const SignupScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input label='Email' />
      <Spacer />
      <Input label='Password' />
      <Spacer>
        <Button title='Sign Up' />
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
