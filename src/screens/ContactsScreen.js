import React from 'react';
import {StyleSheet, Text} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <Text>Contacts Screen</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default ContactsScreen;
