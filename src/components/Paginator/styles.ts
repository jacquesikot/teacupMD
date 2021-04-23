import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('1%'),
  },
  dot: {
    height: hp('0.5%'),
    borderRadius: hp('0.25'),
    backgroundColor: theme.colors.primary,
    marginHorizontal: wp('0.7%'),
  },
});

export default styles;
