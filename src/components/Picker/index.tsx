import React, { FC, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { theme } from '..';
import { Picker as RNPicker } from '@react-native-picker/picker';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  close: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: 18,
    color: theme.colors.dark,
  },
  defaultValue: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: 16,
    color: theme.colors.dark,
    width: widthPercentageToDP(70),
    lineHeight: 22,
  },
});

interface Props {
  visible: boolean;
  setVisible: (state: boolean) => void;
  value: string;
  setValue: (state: string) => void;
  data: any[];
  defaultValue: string;
}

const Picker: FC<Props> = ({
  visible,
  setVisible,
  value,
  setValue,
  data,
  defaultValue,
}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setVisible(!visible)}
      >
        <Text numberOfLines={2} style={styles.defaultValue}>
          {value !== '' ? value : defaultValue}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setVisible(!visible);
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.light,
            width: '100%',
            height: '40%',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.close}>close</Text>
          </TouchableOpacity>
          <RNPicker
            selectedValue={value}
            onValueChange={(itemValue: any, itemIndex: number) =>
              setValue(itemValue)
            }
          >
            {data.map((d, index) => (
              <RNPicker.Item label={d.label} value={d.value} key={index} />
            ))}
          </RNPicker>
        </View>
      </Modal>
    </>
  );
};

export default Picker;
