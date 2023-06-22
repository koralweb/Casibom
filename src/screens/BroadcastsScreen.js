import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';

const BroadcastsScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text style={styles.title}>Спортивные трансляции</Text>
        <View style={styles.cont}>
          <View style={styles.cart_1}>
            <View style={styles.list}>
              <Text style={styles.inner}>IPL</Text>
              <Text style={styles.time}>14.06-00.45</Text>
            </View>
            <View style={styles.command}>
              <View style={styles.border}>
               <Text style={styles.command_1}>Kolkata Knight Raiders</Text>
              </View>
               <Text style={styles.command_2}>Royal Challengers Bangalore</Text>
            </View>
          </View>
          <View style={styles.cart_2}>
            <View style={styles.list}>
              <Text style={styles.inner}>NHL</Text>
              <Text style={styles.time}>17.06-00.10</Text>
            </View>
            <View style={styles.command}>
              <View style={styles.border}>
               <Text style={styles.command_1}>Philadelphia Flyers</Text>
              </View>
               <Text style={styles.command_2}>Pittsburgh Penguins</Text>
            </View>
          </View>
          <View style={styles.cart_1}>
            <View style={styles.list}>
              <Text style={styles.inner}>NBA</Text>
              <Text style={styles.time}>09.06-00.05</Text>
            </View>
            <View style={styles.command}>
              <View style={styles.border}>
               <Text style={styles.command_1}>Golden State Warriors</Text>
              </View>
               <Text style={styles.command_2}>Minnesota Timberwolves</Text>
            </View>
          </View>
          <View style={styles.cart_2}>
            <View style={styles.list}>
              <Text style={styles.inner}>IPL</Text>
              <Text style={styles.time}>14.06-00.45</Text>
            </View>
            <View style={styles.command}>
              <View style={styles.border}>
               <Text style={styles.command_1}>Kolkata Knight Raiders</Text>
              </View>
               <Text style={styles.command_2}>Royal Challengers Bangalore</Text>
            </View>
          </View>

        </View>

      </ScrollView>
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
   width: "90%",
   height: "60%",
   alignSelf: 'center',
  },
  cart_1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    width: 350,
    height: 100,
    paddingLeft: 15,
    marginBottom: 10,
  },
  cart_2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    width: 350,
    height: 100,
    paddingLeft: 15,
    marginBottom: 10,
    backgroundColor: "silver", //"#ECECEC"
  },
  list: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  command: {
    justifyContent: 'center',
    marginLeft: 10,
    borderLeftWidth: 1,
    paddingLeft: 5,
  },
  inner: {
    color: "#F79E1B",
    fontSize: 45,
    fontWeight: 800,
  },
  time: {
    color: "black",
    fontSize: 15,
    fontWeight: 700,
  },
  command_1: {
    color: "black",
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 10,
    
  },
  command_2: {
    color: "black",
    fontSize: 15,
    alignSelf: 'center',
  },
  border: {
    borderBottomWidth: 1,
  },
});

export default BroadcastsScreen;
