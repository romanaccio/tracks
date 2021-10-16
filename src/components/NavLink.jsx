import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacer from './Spacer';

//type Props = { text: string; routeName: string };

//const NavLink = ({ text, routeName }: Props) => {
const NavLink = ({ text, routeName }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 20,
  },
});

export default NavLink;
