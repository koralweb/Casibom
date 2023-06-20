import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const BroadcastsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text>Broadcasts Screen</Text>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default BroadcastsScreen;
