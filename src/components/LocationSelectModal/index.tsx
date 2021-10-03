import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Feather as Icon } from '@expo/vector-icons';

import { theme } from '..';
import deliveryData from '../../screens/cart/deliveryData';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: theme.colors.white,
    height: hp(70),
    width: wp(100),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: theme.constants.screenPadding / 2,
  },
  item: {
    paddingBottom: 30,
    width: wp(40),
  },
  header: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4.5),
    color: theme.colors.dark,
    alignSelf: 'center',
  },
  close: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: theme.colors.light,
    left: theme.constants.screenPadding / 2,
    top: theme.constants.screenPadding / 2,
  },
  location: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp(4),
    color: theme.colors.dark,
  },
});

interface Props {
  show: boolean;
  onRequestClose: any;
  setValue: any;
}

const LocationSelectModal: FC<Props> = ({ show, onRequestClose, setValue }) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onRequestClose}
      style={styles.container}
      useNativeDriver
      useNativeDriverForBackdrop
    >
      <View style={styles.modal}>
        <TouchableOpacity style={styles.close} onPress={onRequestClose}>
          <Icon name="x" color={theme.colors.red} size={18} />
        </TouchableOpacity>
        <Text style={styles.header}>Select Delivery Location</Text>
        <ScrollView style={{ marginTop: 10 }}>
          {deliveryData.map((d, index) => (
            <TouchableOpacity
              style={styles.item}
              key={index}
              onPress={() => {
                onRequestClose();
                setValue(d.value);
              }}
            >
              <Text style={styles.location}>{d.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default LocationSelectModal;
