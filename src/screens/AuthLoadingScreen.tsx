import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { Context as AuthContext, StateInterface } from '../context/AuthContext';

const AuthLoadingScreen = () => {
  const authContext = useContext(AuthContext);
  const { tryLocalSignin } = authContext;
  useEffect(() => {
    tryLocalSignin();
  }, []);
  console.log('AuthLoadingScreen');
  return (
    <View style={styles.main_container}>
      <Text>Loading...</Text>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  },
});
export default AuthLoadingScreen;
