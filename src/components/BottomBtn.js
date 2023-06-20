import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const BottomBtn = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={'shopping-bag'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Забронировать</Text>
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
    marginBottom: 10,
    flexDirection: 'row',
  },
});

export default BottomBtn;
