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
      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.push('Shop')}>
        <Text style={styles.menuText}>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.push('Booking')}>
        <Text style={styles.menuText}>Бронь</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.push('Broadcasts')}>
        <Text style={styles.menuText}>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.list}
        onPress={() => navigation.push('Contacts')}>
        <Text style={styles.menuText}>Контакты</Text>
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
  list: {
    borderRadius: 30,
    width: 350,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ECECEC',
  },
  menuText: {
    paddingTop: 10,
    color: '#191E1F',
    fontSize: 20,
    fontWeight: 700,
  },
  toCart: {
    borderRadius: 30,
    width: 100,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderWidth: 1,
    padding: 5,
  },
});

export default Menu;
