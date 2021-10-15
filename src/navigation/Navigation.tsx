import React from 'react';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
const switchStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <switchStack.Navigator>
        <switchStack.Screen
          name='Auth'
          component={AuthFlow}
          options={{
            headerShown: false,
          }}
        />
        <switchStack.Screen name='Tab' component={TabFlow} />
      </switchStack.Navigator>
    </NavigationContainer>
  );
}
