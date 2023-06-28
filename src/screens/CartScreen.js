import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/style';
import Wrapper from '../components/Wrapper';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';

const Counter = () => {
  const [cnt, setCnt] = useState(1);

  const increment = () => {
    setCnt(cnt + 1);
  };

  const decrement = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.count}>
      <TouchableOpacity onPress={decrement}>
        <Text style={styles.countItem}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countItem}>{cnt}</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={styles.countItem}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => (
        <View style={styles.cont} key={prod.title}>
          <Image source={prod.image} style={styles.img} />

          <View>
            <View style={styles.wrp}>
              <Counter />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => products.removeProduct(prod.id)}>
                <Text style={{color: '#fff'}}>Delete</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{prod.title}</Text>
            <Text style={styles.price}>{prod.price} р </Text>
            <Text style={styles.desc}>{prod.desc}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <ScrollView>
        <Text style={styles.title}>Корзина</Text>
        {renderProducts()}
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
    color: '#191E1F',
    fontSize: 30,
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
    flexDirection: 'row',
    marginLeft: 20,
    width: '50%',
    marginBottom: 20,
  },
  count: {
    backgroundColor: '#FF9B02',
    width: 90,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
    color: 'white',
    marginRight: 5,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countItem: {
    fontSize: 15,
    fontWeight: '700',
  },
  btn: {
    backgroundColor: '#760505',
    width: 90,
    height: 30,
    textAlign: 'center',
    paddingTop: 3,
    color: 'white',
    borderRadius: 15,
    fontSize: 15,
    fontWeight: 600,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrp: {
    flexDirection: 'row',
  },
  desc: {
    color: 'black',
    fontSize: 13,
    paddingTop: 15,
    marginBottom: 15,
    fontWeight: 900,
    alignSelf: 'center',
  },
  price: {
    color: 'black',
    fontSize: 15,
    fontWeight: 800,
    marginTop: 5,
  },
});

export default observer(CartScreen);
