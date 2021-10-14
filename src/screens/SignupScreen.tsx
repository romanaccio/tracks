import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthStackParamList } from '../types/types';
type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const SignupScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title='go to Signin'
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
