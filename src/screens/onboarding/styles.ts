import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const { width } = Dimensions.get('window');
export const SCREEN_WIDTH = width - theme.constants.screenPadding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    marginBottom: 30,
  },
  buttonContainer: {
    marginBottom: 60,
  },
});

export default styles;
