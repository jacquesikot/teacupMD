import React from 'react';
import {
  View,
  TextInputProps,
  TextInput as RNTextInput,
  Text,
} from 'react-native';

import styles, { TEXT_INPUT_HEIGHT, TEXT_INPUT_WIDTH } from './styles';
import { theme } from '../../components';

interface Props extends TextInputProps {
  error?: string;
  touched?: boolean;
  width?: number;
  height?: number;
}

const TextInput = ({ error, touched, width, height, ...props }: Props) => {
  const reBorderColor = !touched ? 'grey' : error ? 'red' : 'green';
  const reColor = !touched ? 'subText' : error ? 'red' : 'green';
  const borderColor = theme.colors[reBorderColor];
  const color = theme.colors[reColor];
  const widthValue = width ? width : TEXT_INPUT_WIDTH;
  const heightValue = height ? height : TEXT_INPUT_HEIGHT;

  return (
    <View
      style={[
        styles.container,
        { borderColor: borderColor, width: widthValue, height: heightValue },
      ]}
    >
      <RNTextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        {...props}
      />
      {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default TextInput;
