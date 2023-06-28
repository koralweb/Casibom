import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';
import ThankYou from '../components/ThankYou';

const BookingScreen = ({navigation, route}) => {
  const [thanks, setThanks] = useState(false);
  return (
    <>
      {thanks && <ThankYou navigation={navigation} />}
      <Wrapper setThanks={setThanks} navigation={navigation}>
        <Text style={styles.title}>Оформление</Text>

        <View style={styles.cont}>
          <TextInput style={styles.name} placeholder="Имя" />
          <Text style={styles.titleCart}>Данные</Text>
          <TextInput style={styles.booking} placeholder="Номер телефона" />
          {!route.params?.cart && (
            <TextInput style={styles.booking} placeholder="Столик" />
          )}
          <TextInput style={styles.booking} placeholder="Время" />
          <TextInput style={styles.booking} placeholder="Дата" />
        </View>
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    paddingTop: 15,
    marginBottom: 15,
    color: '#191E1F',
    fontSize: 30,
    fontWeight: 900,
    alignSelf: 'center',
  },
  cont: {
    backgroundColor: '#ECECEC',
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
  },
  name: {
    backgroundColor: 'white',
    borderRadius: 25,
    fontSize: 18,
    marginBottom: 15,
    paddingLeft: 15,
    height: 35,
  },
  titleCart: {
    fontSize: 20,
    fontWeight: 700,
    color: '#999999',
    marginBottom: 15,
  },
  booking: {
    backgroundColor: 'white',
    borderRadius: 25,
    fontSize: 15,
    marginBottom: 15,
    paddingLeft: 15,
    height: 35,
  },
});

export default BookingScreen;
