import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';
import matchesList from '../data/matchesList';

const BroadcastsScreen = ({navigation}) => {
  const renderList = () => {
    return matchesList
      .filter(el => el.date >= new Date().getDate())
      .map(match => (
        <View style={styles.cart_1} key={Math.random()}>
          <View style={styles.list}>
            <Text style={styles.inner}>{match.liga}</Text>
            <Text style={styles.time}>
              {match.date}.06-{match.time}
            </Text>
          </View>
          <View style={styles.command}>
            <View style={styles.border}>
              <Text style={styles.command_1}>{match.team1}</Text>
            </View>
            <Text style={styles.command_2}>{match.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text style={styles.title}>Спортивные трансляции</Text>
        <View style={styles.cont}>{renderList()}</View>
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,

  title: {
    paddingTop: 15,
    marginBottom: 15,
    color: '#191E1F',
    fontSize: 35,
    fontWeight: 900,
    alignSelf: 'center',
  },
  cont: {
    width: '90%',
    height: '60%',
    alignSelf: 'center',
  },
  cart_1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    width: '100%',
    minHeight: 100,
    paddingLeft: 15,
    marginBottom: 10,
  },
  list: {
    justifyContent: 'center',
    marginLeft: 10,
    width: '30%',
  },
  command: {
    justifyContent: 'center',
    marginLeft: 10,
    borderLeftWidth: 1,
    paddingLeft: 5,
  },
  inner: {
    color: '#F79E1B',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  time: {
    color: 'black',
    fontSize: 15,
    fontWeight: 700,
  },
  command_1: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 10,
  },
  command_2: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
  },
  border: {
    borderBottomWidth: 1,
  },
});

export default BroadcastsScreen;
