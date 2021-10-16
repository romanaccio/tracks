import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { isValidEmail, isValidPassword } from '../misc/misc';

export interface CredentialsInterface {
  email: string;
  password: string;
}

type Props = {
  title: string;
  onPress({ email, password }: CredentialsInterface): Function;
};
const AuthenticationForm = ({ title, onPress }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>{title}</Text>
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
          title='Go'
          onPress={() => {
            if (!isValidEmail(email)) {
              setError('Email format is invalid');
            } else if (!isValidPassword(password)) {
              setError('Password is too short');
            } else {
              setError('');
              onPress({ email, password });
            }
          }}
        />
      </Spacer>
      <Spacer>
        <Text style={styles.error}>{error}</Text>
      </Spacer>
    </View>
  );
};

export default AuthenticationForm;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
  },
});
