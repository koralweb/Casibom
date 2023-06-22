import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomLine = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Home')}>
        <FontAwesomeIcon icon={'home'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <FontAwesomeIcon icon={'heart'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <FontAwesomeIcon icon={'comment'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-bag'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 1,
    borderRadius: 30,
    width: '90%',
    height: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: "silver", //"#ECECEC"
  },
  
});

export default BottomLine;
