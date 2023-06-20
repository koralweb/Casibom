import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const CartScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text>Cart Screen</Text>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default CartScreen;
