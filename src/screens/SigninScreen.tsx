import React, { useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';
import { AuthStackParamList } from '../types/types';
import AuthenticationForm from '../components/AuthenticationForm';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signin'>;

const SigninScreen = ({ route, navigation }: Props) => {
  const authContext = useContext(AuthContext);
  const signin = authContext.signin;
  const state: StateInterface = authContext.state;

  return (
    <View style={styles.container}>
      <AuthenticationForm title='Sign in for Tracker' onPress={signin} />
      <Spacer>
        <Text style={styles.error}>{state.errorMessage}</Text>
      </Spacer>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Spacer>
          <Text style={styles.link}>
            Don't have an account? Sign up instead
          </Text>
        </Spacer>
      </Pressable>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
  error: {
    color: 'red',
  },
  link: {
    color: 'blue',
  },
});
