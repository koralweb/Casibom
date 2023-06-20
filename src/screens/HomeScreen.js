import React from 'react';
import {StyleSheet, Text} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <Text>Home Screen</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default HomeScreen;
