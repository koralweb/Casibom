import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';

const ThankYou = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      products.clearCart();
      navigation.push('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.cont}>
      <FontAwesomeIcon icon={'check-circle'} color={'#fff'} size={40} />
      <Text style={styles.text}>Благодарим за ваш заказ!</Text>
      <Text style={styles.text}>Наши менеджеры скоро свяжутся с вами</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.black,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
  },
});

export default ThankYou;
