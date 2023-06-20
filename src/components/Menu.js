import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';
import globalStyles from '../data/style';

const Menu = ({setShowMenu, navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={{...styles.closeBtn, zIndex: 1000}}
        onPress={() => setShowMenu(false)}>
        <FontAwesomeIcon
          icon={'times-circle'}
          color={colors.yellow}
          size={35}
        />
      </TouchableOpacity>
      <Image source={require('../assets/topMenu.png')} style={styles.topImg} />
      <TouchableOpacity>
        <Text>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Booking')}>
        <Text>Бронь</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Broadcasts')}>
        <Text>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Contacts')}>
        <Text>Контакты</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toCart}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-bag'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    zIndex: 101,
    alignItems: 'center',
  },
  topImg: {
    // 1224x996 = 1,2289
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 1.2289,
  },
  toCart: {
    marginTop: 'auto',
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
  },
});

export default Menu;
