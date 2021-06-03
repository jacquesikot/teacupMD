import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

export const PRODUCT_WIDTH = wp(41);
export const PRODUCT_HEIGHT = isAndroid ? hp(27) : hp(25);
export const MARGIN_RIGHT = wp(8.4);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  productGrid: {
    width: theme.constants.screenWidth,
    height: '100%',
  },
});

export default styles;
