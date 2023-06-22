import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const BookingScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <Text style={styles.title}>Бронь</Text>
      
      <View style={styles.cont}>
        <TextInput style={styles.name} placeholder='Имя'></TextInput>
        <Text style={styles.titleCart}>Данные</Text>
        <TextInput style={styles.booking} placeholder='Номер телефона'></TextInput>
        <TextInput style={styles.booking} placeholder='Столик'></TextInput>
        <TextInput style={styles.booking} placeholder='Время'></TextInput>
        <TextInput style={styles.booking} placeholder='Дата'></TextInput>
      </View>

    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    paddingTop: 15,
    marginBottom: 15,
    color: "#191E1F",
    fontSize: 35,
    fontWeight: 900,
    alignSelf: 'center',
  },
  cont: {
    backgroundColor: "#ECECEC",
    width: "90%",
    height: "60%",
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
  },
  name: {
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 18,
    marginBottom: 15,
    paddingLeft: 15,
  },
  titleCart: {
    fontSize: 20,
    fontWeight: 700,
    color: "#999999",
    marginBottom: 15,
  },
  booking: {
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
});

export default BookingScreen;
