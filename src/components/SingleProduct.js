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

const SingleProduct = ({prod, clearSingleProduct}) => {
  return (
    <View style={styles.cont}>
      <ImageBackground style={styles.topImg} source={prod.image}>
        <TouchableOpacity onPress={clearSingleProduct} style={styles.backBtn}>
          <FontAwesomeIcon icon={'arrow-left'} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.productInfo}>
        <Text>{prod.title}</Text>
        <Text>{prod.price}</Text>
        <Text>{prod.desc}</Text>
      </View>
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
  productInfo: {},
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
});

export default SingleProduct;
