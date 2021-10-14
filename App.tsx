import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from './src/screens/AccountScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const switchStack = createNativeStackNavigator();

const authStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <authStack.Navigator>
      <authStack.Screen name='Signup' component={SignupScreen} />
      <authStack.Screen name='Signin' component={SigninScreen} />
    </authStack.Navigator>
  );
}

const listDetailStack = createNativeStackNavigator();
function ListDetailFlow() {
  return (
    <listDetailStack.Navigator>
      <listDetailStack.Screen name='TrackList' component={TrackListScreen} />
      <listDetailStack.Screen
        name='TrackDetail'
        component={TrackDetailScreen}
      />
    </listDetailStack.Navigator>
  );
}

const tabStack = createBottomTabNavigator();
function TabFlow() {
  return (
    <tabStack.Navigator>
      <tabStack.Screen name='Account' component={AccountScreen} />
      <tabStack.Screen name='TrackCreate' component={TrackCreateScreen} />
      <tabStack.Screen name='ListDetail' component={ListDetailFlow} />
    </tabStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <switchStack.Navigator>
        <switchStack.Screen name='Auth' component={AuthFlow} />
        <switchStack.Screen name='Tab' component={TabFlow} />
      </switchStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
