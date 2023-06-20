import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import globalStyles from '../data/style';
import TopLine from './TopLine';
import BottomLine from './BottomLine';
import BottomBtn from './BottomBtn';
import {useRoute} from '@react-navigation/native';

const Wrapper = ({children, navigation}) => {
  const [showBottomBtn, setShowBottomBtn] = useState(false);
  const screenName = useState(useRoute().name)[0];

  useEffect(() => {
    const screensVsBtn = ['Booking'];
    if (screensVsBtn.includes(screenName)) {
      setShowBottomBtn(true);
    }
  }, []);

  return (
    <View style={styles.gContainer}>
      <TopLine navigation={navigation} />
      {children}
      {showBottomBtn ? (
        <BottomBtn navigation={navigation} />
      ) : (
        <BottomLine navigation={navigation} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default Wrapper;
