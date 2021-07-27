import React from 'react';
import { View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import isAndroid from '../../utils/isAndroid';
import Button from '../Button/Button';

import styles, { BUTTON_WIDTH } from './styles';

interface Props {
  show: boolean;
  onRequestClose: () => void;
}

const ComingSoon = ({ show, onRequestClose }: Props) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onRequestClose}
      useNativeDriver={true}
    >
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/comingSoon.png')}
          style={{
            width: isAndroid ? 263.6 : 283.6,
            height: isAndroid ? 156.5 : 176.5,
          }}
        />
        <Text style={styles.heading}>Coming Soon!!</Text>
        <Text style={styles.subtext}>
          Our doctors and medical professionals are getting ready to serve you.
        </Text>
        {isAndroid ? null : (
          <Button
            label="Go back"
            type="primary"
            width={BUTTON_WIDTH}
            onPress={() => onRequestClose()}
          />
        )}
      </View>
    </Modal>
  );
};

export default ComingSoon;
