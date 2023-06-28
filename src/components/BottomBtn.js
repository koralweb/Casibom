import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';
import {useRoute} from '@react-navigation/native';

const BottomBtn = ({navigation, single, setThanks}) => {
  const screenName = useState(useRoute().name)[0];
  const renderButton = () => {
    if (single?.added) {
      return (
        <FontAwesomeIcon
          icon={'check-circle'}
          size={50}
          style={styles.addedIcon}
        />
      );
    }
    if (single) {
      return (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => products.addProduct(single.id, 1)}>
          <Text style={styles.btnText}>В корзину</Text>
        </TouchableOpacity>
      );
    }
    if (screenName === 'Cart') {
      return products.list.some(el => el.added) ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push('Booking', {cart: true})}>
          <Text style={styles.btnText}>Оформить</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push('Shop')}>
          <Text style={styles.btnText}>В магазин</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.btn} onPress={() => setThanks(true)}>
        <Text style={styles.btnText}>Подтвердить</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-bag'} />
      </TouchableOpacity>
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  btn: {
    width: 280,
    height: 60,
    backgroundColor: '#F79E1B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 700,
    color: 'white',
  },
  addedIcon: {
    marginTop: 'auto',
    marginBottom: 20,
    color: 'green',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default observer(BottomBtn);
