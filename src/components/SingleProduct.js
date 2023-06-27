import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import BottomBtn from '../components/BottomBtn';


const SingleProduct = ({prod, clearSingleProduct, navigation}) => {
  return (
    
          <View style={styles.cont}>
      <ImageBackground style={styles.topImg} source={prod.image}>
        <TouchableOpacity onPress={clearSingleProduct} style={styles.backBtn}>
          <FontAwesomeIcon icon={'arrow-left'} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.productInfo}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.price}>{prod.price}</Text>
        <View style={styles.wrp}>
        <Text style={styles.desc}>{prod.desc}</Text>
      </View>
        </View>
        <BottomBtn navigation={navigation} />
    </View>

  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
   
    
  },
  topImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  productInfo: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
  },
  backBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: 900,
    marginBottom: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: 900,
    marginBottom: 15,
  },
  wrp: {
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    width: "90%",
    height: "30%",
    justifyContent: "center",
   alignItems: "center",
  },
  desc: {
    fontSize: 15,
    fontWeight: 500,
  },
});

export default SingleProduct;
