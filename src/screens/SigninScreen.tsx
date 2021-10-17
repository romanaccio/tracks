import React, { useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';
import { AuthStackParamList } from '../types/types';
import AuthenticationForm from '../components/AuthenticationForm';
import NavLink from '../components/NavLink';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signin'>;

const SigninScreen = ({ route, navigation }: Props) => {
  const authContext = useContext(AuthContext);
  const { signin, clearErrorMessage } = authContext;
  const state: StateInterface = authContext.state;

  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
      return;
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthenticationForm
        title='Sign in for Tracker'
        errorMessage={state.errorMessage}
        onPress={signin}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName='Signup'
      />
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
});
