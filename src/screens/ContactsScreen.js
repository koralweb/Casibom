import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const ContactsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <Text style={styles.title}>Контакты</Text>
      <View style={styles.cont}>
        <Text style={styles.list}>Номер 000 0000 000</Text>
        <Text style={styles.list}>Адрес Город, Страна</Text>
        <Text style={styles.list}>Данные</Text>
        <Text style={styles.list}>Индекс</Text>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    backgroundColor: '#ECECEC',
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
  },
  title: {
    paddingTop: 15,
    marginBottom: 15,
    color: '#191E1F',
    fontSize: 35,
    fontWeight: 900,
    alignSelf: 'center',
  },
  list: {
    backgroundColor: 'white',
    borderRadius: 25,
    fontSize: 15,
    marginBottom: 15,
    padding: 10,
    paddingLeft: 25,
    color: 'black',
  },
});

export default ContactsScreen;
