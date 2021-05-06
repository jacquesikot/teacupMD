import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import StatusScreen from '../../components/StatusScreen/StatusScreen';
import { HomeNavParamList } from '../../types/navigationTypes';

import styles from './styles';

const OrderStatus = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'OrderStatus'>) => {
  const { status } = route.params;

  const returnImg = () => {
    if (status === 'success') {
      return require('../../../assets/images/orderSuccess.png');
    } else if (status === 'failed') {
      return require('../../../assets/images/orderFail.png');
    }
  };

  const returnHeading = () => {
    if (status === 'success') {
      return 'Order Placed Successfully';
    } else if (status === 'failed') {
      return 'Sorry Order has Failed';
    }
    return '';
  };

  const returnSubHeading = () => {
    if (status === 'success') {
      return 'Thanks for your order. Your order has been placed successfuly';
    } else if (status === 'failed') {
      return 'Sorry, something went wrong. Please try again.';
    }
    return '';
  };

  const returnButtonLabel = () => {
    if (status === 'success') {
      return 'Continue';
    } else if (status === 'failed') {
      return 'Try Again';
    }
    return '';
  };

  const returnButtonOnPress = () => {
    if (status === 'success') {
      return () => navigation.navigate('Home');
    } else if (status === 'failed') {
      return () => navigation.navigate('Cart');
    }
    return () => navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <StatusScreen
        image={returnImg()}
        heading={returnHeading()}
        subtext={returnSubHeading()}
        buttonLabel={returnButtonLabel()}
        onPress={returnButtonOnPress()}
      />
    </View>
  );
};

export default OrderStatus;
