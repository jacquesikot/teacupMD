import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Feather as Icon } from '@expo/vector-icons';

import { CartIcon } from '../../svg/profileIcons';
import CartMethod from '../CartMethod/CartMethod';
import Button from '../Button/Button';
import styles from './styles';
import { theme } from '..';

interface Props {
  show: boolean;
  onRequestClose: any;
  cartTotal: string;
}

const CheckoutModal = ({ show, onRequestClose, cartTotal }: Props) => {
  const options = [
    {
      id: 1,
      title: 'Credit Card',
      subtext: 'Pay with Flutterwave pay',
      type: 'credit-card',
    },
    {
      id: 2,
      title: 'Cash',
      subtext: 'Pay cash on delivery',
      type: 'cash',
    },
  ];

  const [selected, setSelected] = useState<any>(options[0]);

  return (
    <View>
      <Modal
        isVisible={show}
        onBackdropPress={onRequestClose}
        style={styles.container}
      >
        <View style={styles.modal}>
          <View style={styles.topView}>
            <View style={styles.cartContainer}>
              <View style={styles.cartIcon}>
                <CartIcon />
              </View>
              <Text style={styles.cartText}>Cart Total</Text>
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.totalText}>total</Text>
              <Text style={styles.totalAmount}>ZK {cartTotal}</Text>
            </View>
          </View>
          <Text style={styles.deliveryAddress}>Delivery Address</Text>
          <View style={styles.deliveryContainer}>
            <View style={styles.deliveryTextContainer}>
              <Text style={styles.deliveryText1} numberOfLines={1}>
                Home Address
              </Text>
              <Text style={styles.deliveryText2} numberOfLines={1}>
                (309) 071-9652-556
              </Text>
              <Text style={styles.deliveryText2} numberOfLines={1}>
                1749 Customer Road, Lusaka
              </Text>
            </View>
            <View style={styles.icon}>
              <Icon name="check" size={14} color={theme.colors.white} />
            </View>
          </View>
          <Text style={styles.method}>Method</Text>
          <View style={styles.cartMethodContainer}>
            <FlatList
              data={options}
              showsVerticalScrollIndicator={false}
              bounces={false}
              ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setSelected(item)}
                >
                  <CartMethod
                    type={item.type}
                    title={item.title}
                    subtext={item.subtext}
                    selected={selected.id === item.id && true}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ flex: 1 }} />

          <View style={styles.line} />
          <Button
            label="Pay now"
            type="primary"
            width={theme.constants.screenWidth}
            onPress={() => alert('pay now')}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutModal;
