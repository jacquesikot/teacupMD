import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, SafeAreaView, FlatList } from 'react-native';

import StackHeader from '../../components/StackHeader/StackHeader';
import Button from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';
import { HomeNavParamList } from '../../types/navigationTypes';
import styles from './styles';
import { theme } from '../../components';
import { useAppContext } from '../../context/context';
import StatusScreen from '../../components/StatusScreen/StatusScreen';

const Cart = ({ navigation }: StackScreenProps<HomeNavParamList>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cart, cartTotal } = useAppContext();

  const delivery = 25;

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
            {cart.length.toString()} Items in cart
          </Text>
          <View style={styles.productContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cart}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }: any) => (
                <CartItem
                  image={item.images[0]}
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
              <Text style={styles.summaryPrice}>
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
          />
        </>
      ) : (
        <StatusScreen
          type="emptyCart"
          image={require('../../../assets/images/emptyCart.png')}
          heading="Oppss!"
          subtext="Sorry, you have no product in your cart"
          buttonLabel="Start Browsing"
          onPress={() => navigation.navigate('Home')}
        />
      )}
    </SafeAreaView>
  );
};

export default Cart;
