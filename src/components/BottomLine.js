import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomLine = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Home')}>
        <FontAwesomeIcon icon={'home'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Broadcasts')}>
        <FontAwesomeIcon icon={'file-text'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Booking')}>
        <FontAwesomeIcon icon={'tags'} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-bag'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 1,
    borderRadius: 30,
    width: '90%',
    height: 70,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  item: {
    opacity: 0.5,
  },
});

export default BottomLine;
