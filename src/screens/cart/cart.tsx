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
import productData from '../home/productData';

const Cart = ({ navigation }: StackScreenProps<HomeNavParamList>) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader
        label="Cart"
        favorite={() => alert('favorites')}
        color="white"
        back={() => navigation.goBack()}
      />
      <Text style={styles.cartHeading}>2 Items in cart</Text>
      <View style={styles.productContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productData}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: any) => (
            <CartItem
              image={item.images[0]}
              title={item.title}
              price={item.price}
            />
          )}
        />
      </View>
      <Text style={styles.totalText}>In Total</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Order</Text>
          <Text style={styles.summaryPrice}>ZK 980.99</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Delivery</Text>
          <Text style={styles.summaryPrice}>ZK 15.00</Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryText}>Summary</Text>
          <Text style={styles.summaryPrice}>ZK 995.99</Text>
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
      />
    </SafeAreaView>
  );
};

export default Cart;
