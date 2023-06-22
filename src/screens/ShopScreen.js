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
          <Text>{prod.title}</Text>
          <Text>{prod.price}</Text>
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
    marginHorizontal: 10,
    marginVertical: 20,
  },
  productsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    width: imageWidth,
    height: imageWidth,
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default ShopScreen;
