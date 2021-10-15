import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Context as AuthContext,
  CredentialsInterface,
} from '../context/AuthContext';
import { AuthStackParamList } from '../types/types';
import { isValidEmail, isValidPassword } from '../misc/misc';

type Props = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const SignupScreen = ({ route, navigation }: Props) => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const signup = authContext.signup;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        onChangeText={setEmail}
        value={email}
        placeholder='Enter Email'
        autoCapitalize='none'
        autoCorrect={false}
        clearButtonMode='always'
      />
      <Spacer />
      <Input
        label='Password'
        onChangeText={setPassword}
        value={password}
        placeholder='Enter Password'
        autoCapitalize='none'
        autoCorrect={false}
        clearButtonMode='always'
        secureTextEntry={true}
      />
      <Spacer>
        <Button
          title='Sign Up'
          onPress={() => {
            if (!isValidEmail(email)) {
              setError('Email format is invalid');
            } else if (!isValidPassword(password)) {
              setError('Password is too short');
            } else {
              setError('');
              signup({ email, password });
            }
          }}
        />
      </Spacer>
      <Spacer>
        <Text>{error}</Text>
      </Spacer>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
});
