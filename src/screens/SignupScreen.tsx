import React, { useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';
import { AuthStackParamList } from '../types/types';
import AuthenticationForm from '../components/AuthenticationForm';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const SignupScreen = ({ route, navigation }: Props) => {
  const authContext = useContext(AuthContext);
  const signup = authContext.signup;
  const state: StateInterface = authContext.state;

  return (
    <View style={styles.container}>
      <AuthenticationForm title='Sign up for Tracker' onPress={signup} />
      <Spacer>
        <Text style={styles.error}>{state.errorMessage}</Text>
      </Spacer>
      <Pressable onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </Pressable>
    </View>
  );
};

export default SignupScreen;

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
