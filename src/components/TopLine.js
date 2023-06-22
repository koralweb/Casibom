import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Menu from './Menu';
import {useRoute} from '@react-navigation/native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import globalStyles from '../data/style';

const TopLine = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(useRoute().name === 'Home');

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={'bars'} size={30} color={'#fff'} />
      </TouchableOpacity>
      {showMenu && <Menu navigation={navigation} setShowMenu={setShowMenu} />}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>

    
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    paddingTop: 35,
    position: 'relative',
    zIndex: 100,
    backgroundColor: colors.black,
    height: 120,
  },
  logo: {
    width: 619 / 3,
    height: 214 / 3,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});

export default TopLine;
