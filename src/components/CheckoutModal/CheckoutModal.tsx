import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { CartIcon } from '../../svg/profileIcons';

import styles from './styles';

interface Props {
  show: boolean;
  onRequestClose: any;
}

const CheckoutModal = ({ show, onRequestClose }: Props) => {
  return (
    <View>
      <Modal
        isVisible={show}
        onBackdropPress={onRequestClose}
        onSwipeComplete={onRequestClose}
        swipeDirection="down"
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
              <Text style={styles.totalAmount}>ZK 9000.65</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutModal;
