import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomBtn = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.icon}>
        <FontAwesomeIcon icon={'shopping-bag'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Забронировать</Text>
      </TouchableOpacity>
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
    backgroundColor: "#ECECEC",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  btn: {
    width: 280,
    height: 60,
    backgroundColor: "#F79E1B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
  },
});

export default BottomBtn;
