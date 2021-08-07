import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, SafeAreaView, FlatList, Alert } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import StackHeader from '../../components/StackHeader/StackHeader';
import Button from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';
import { HomeNavParamList } from '../../types/navigationTypes';
import styles from './styles';
import { theme } from '../../components';
import { useAppContext } from '../../context/context';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import addressApi from '../../firebase/address';

const Cart = ({ navigation }: StackScreenProps<HomeNavParamList>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cart, cartTotal, user, manageCart } = useAppContext();
  const [address, setAddress] = useState<any[]>([]);

  const delivery = 25;

  const loadData = async () => {
    const address = await addressApi.getUserAddress({
      pageParam: user.id,
    });
    setAddress(address);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Cart"
        color="white"
        back={() => navigation.goBack()}
      />
      {cart.length > 0 ? (
        <>
          <Text style={styles.cartHeading}>
            {cart.length.toString()}{' '}
            {`Item${cart.length > 1 ? 's' : ''} in cart`}
          </Text>
          <View style={styles.productContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cart}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }: any) => (
                <CartItem
                  image={
                    item.images
                      ? item.images[0]
                      : `https://via.placeholder.com/${wp(18)}x${wp(
                          16
                        )}.png/f4f5f7?text=No+Image`
                  }
                  title={item.title}
                  price={item.sale_price ? item.sale_price : item.price}
                  product={item}
                />
              )}
            />
          </View>
          <Text style={styles.totalText}>In Total</Text>
          <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryText}>Order</Text>
              <Text style={styles.summaryPrice}>ZK {cartTotal.toString()}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryText}>Delivery</Text>
              <Text style={styles.summaryPrice}>ZK {delivery}</Text>
            </View>
            <View style={{ height: 20 }} />
            <View style={styles.summaryItem}>
              <Text style={styles.summaryText}>Summary</Text>
              <Text style={styles.summaryPriceFinal}>
                ZK {(cartTotal + delivery).toString()}
              </Text>
            </View>
          </View>
          <Button
            label="Checkout"
            type="primary"
            onPress={() => setShowModal(true)}
            width={theme.constants.screenWidth}
          />
          <CheckoutModal
            show={showModal}
            onRequestClose={() => setShowModal(false)}
            cartTotal={(cartTotal + delivery).toString()}
            addresses={address}
            onFinish={(status: string) => {
              if (status === 'success') {
                navigation.navigate('OrderStatus', { status: status });
                setShowModal(false);
                manageCart('EMPTY_CART');
              } else {
                navigation.navigate('OrderStatus', { status: status });
                setShowModal(false);
              }
            }}
            handleAddress={() => {
              if (user.id) {
                setShowModal(false);
                navigation.navigate('EditAddress');
              } else {
                Alert.alert('', 'Please login to add address');
              }
            }}
          />
        </>
      ) : (
        <View>
          <StatusScreen
            image={require('../../../assets/images/emptyCart.png')}
            heading="Oppss!"
            subtext="Sorry, you have no product in your cart"
            buttonLabel="Start Browsing"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;
