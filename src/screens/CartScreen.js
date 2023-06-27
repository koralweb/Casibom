import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';


const CartScreen = ({navigation}) => {
  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text style={styles.title}>Корзина</Text>
        
         <View style={styles.cont}>
            <Image source={require('../assets/c1.jpg')} style={styles.img}></Image>
            
            <View>
              <View style={styles.wrp}>
                <Text style={styles.count}>- 1 +</Text>
                <Text style={styles.btn}>Delite</Text>
              </View>
                
               <Text style={styles.price}>189</Text>
               <Text style={styles.desc}>Филе грудки цыплёнка, майонез, дижонская горчица, морковь, яблоко, салат айсберг, китайская капуста, сыр гауда, картофель пай, перец чили острый.</Text>
             </View> 
                  
          </View>
          <View style={styles.cont}>
            <Image source={require('../assets/c22.jpg')} style={styles.img}></Image>
            
            <View>
              <View style={styles.wrp}>
                <Text style={styles.count}>- 1 +</Text>
                <Text style={styles.btn}>Delite</Text>
              </View>
                
               <Text style={styles.price}>189</Text>
               <Text style={styles.desc}>Филе грудки цыплёнка, майонез, дижонская горчица, морковь, яблоко, салат айсберг, китайская капуста, сыр гауда, картофель пай, перец чили острый.</Text>
             </View> 
                  
          </View>
          
      
       
      </ScrollView>
      
    </Wrapper>
  );
};
//<Text style={styles.desc}>Корзина пустая</Text>
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
  desc: {
    paddingTop: 15,
    marginBottom: 15,
    color: "silver",
    fontSize: 25,
    fontWeight: 900,
    alignSelf: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginRight: 20,
    borderRadius: 25,
  },
  cont: {
    flexDirection: "row",
    marginLeft: 20,
    width: "50%",
    marginBottom: 20,
  },
  count: {
    backgroundColor: "#FF9B02",
    width: 90,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
    color: "white",
    marginRight: 5,
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 600,
  },
  btn: {
    backgroundColor: "#760505",
    width: 90,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
    color: "white",
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 600,
  },
  wrp: {
    flexDirection: "row",
  },
  desc: {
    color: "black",
    fontSize: 13,
    fontWeight: 400,
  },
  price: {
    color: "black",
    fontSize: 15,
    fontWeight: 800,
    marginTop: 5,
  },
});

export default CartScreen;
