import React from 'react';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from '../navigation/navigationRef';

const authStack = createNativeStackNavigator();
function AuthFlow() {
  return (
    <authStack.Navigator>
      <authStack.Screen
        name='Signup'
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <authStack.Screen
        name='Signin'
        component={SigninScreen}
        options={{
          headerShown: false,
        }}
      />
    </authStack.Navigator>
  );
}

const listDetailStack = createNativeStackNavigator();
function ListDetailFlow() {
  return (
    <listDetailStack.Navigator>
      <listDetailStack.Screen
        name='TrackList'
        component={TrackListScreen}
        options={{
          headerShown: false,
        }}
      />
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
      <tabStack.Screen
        name='ListDetail'
        component={ListDetailFlow}
        options={{
          headerShown: false,
        }}
      />
      <tabStack.Screen
        name='TrackCreate'
        component={TrackCreateScreen}
        options={{
          headerShown: false,
        }}
      />
      <tabStack.Screen
        name='Account'
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </tabStack.Navigator>
  );
}
const switchStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <switchStack.Navigator>
        <authStack.Screen
          name='AuthLoading'
          component={AuthLoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <switchStack.Screen
          name='Auth'
          component={AuthFlow}
          options={{
            headerShown: false,
          }}
        />
        <switchStack.Screen
          name='Tab'
          component={TabFlow}
          options={{
            headerShown: false,
          }}
        />
      </switchStack.Navigator>
    </NavigationContainer>
  );
}
