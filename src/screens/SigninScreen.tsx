import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AuthStackParamList, MainStackParamList } from '../types/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'Signin'>,
  NativeStackScreenProps<MainStackParamList>
>;

const SigninScreen = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title='go to Signup'
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title='go to main flow'
        onPress={() => navigation.navigate('Tab')}
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
