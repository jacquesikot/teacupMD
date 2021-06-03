import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    width: wp(43),
    height: hp(12),
    borderRadius: wp(5),
    padding: wp(4),
  },
  upperText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(3.5),
    color: theme.colors.dark,
    width: '65%',
    lineHeight: isAndroid ? 15 : 23,
    marginBottom: hp(1),
  },
  lowerText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: isAndroid ? wp(2.5) : wp(3),
    color: theme.colors.darkGrey,
  },
  image: {
    position: 'absolute',
    left: '75%',
    top: '23%',
    width: 48,
    height: 30,
  },
});

export default styles;
