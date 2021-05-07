import React, { useState } from 'react';
import {
  View,
  TextInputProps,
  TextInput as RNTextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles, { TEXT_INPUT_HEIGHT, TEXT_INPUT_WIDTH } from './styles';
import { theme } from '../../components';

interface Props extends TextInputProps {
  error?: string;
  touched?: boolean;
  width?: number;
  height?: number;
  secured?: boolean;
}

const TextInput = ({
  error,
  touched,
  width,
  height,
  secured,
  ...props
}: Props) => {
  const [visible, setVisible] = useState<boolean>(false);

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
        secureTextEntry={secured ? !visible : false}
        {...props}
      />
      {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
      {secured && (
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setVisible(!visible)}
        >
          {visible ? (
            <Icon name="eye-off" size={20} color={theme.colors.grey} />
          ) : (
            <Icon name="eye" size={20} color={theme.colors.grey} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
