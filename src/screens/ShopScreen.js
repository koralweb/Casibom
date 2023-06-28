import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import SingleProduct from '../components/SingleProduct';
import colors from '../data/colors';

const ShopScreen = ({navigation}) => {
  const [showSingleProduct, setShowSingleProduct] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);

  const clearSingleProduct = () => {
    setShowSingleProduct(false);
    setSingleProduct(null);
  };
  const clickOnProduct = prod => {
    setShowSingleProduct(true);
    setSingleProduct(prod);
  };
  const renderProducts = () => {
    return products.list.map(prod => (
      <TouchableOpacity
        key={Math.random()}
        onPress={() => clickOnProduct(prod)}>
        <ImageBackground source={prod.image} style={styles.item}>
          <View style={styles.list}>
            <Text style={styles.title}>{prod.title}</Text>
            <Text style={styles.price}>{prod.price}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return (
    <>
      {showSingleProduct ? (
        <SingleProduct
          clearSingleProduct={clearSingleProduct}
          prod={singleProduct}
          navigation={navigation}
        />
      ) : (
        <Wrapper navigation={navigation}>
          <ScrollView style={styles.cont}>
            <View style={styles.productsCont}>{renderProducts()}</View>
          </ScrollView>
        </Wrapper>
      )}
    </>
  );
};
const imageWidth = Dimensions.get('window').width / 2 - 30;

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    alignSelf: 'center',
    backgroundColor: colors.black,
  },
  productsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
  },
  item: {
    width: imageWidth,
    height: imageWidth,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 800,
    width: '80%',
  },
  price: {
    color: 'white',
    fontSize: 15,
    fontWeight: 800,
    width: '20%',
    textAlign: 'center',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
  },
});

export default ShopScreen;
