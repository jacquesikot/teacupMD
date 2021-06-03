import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  cartHeading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: isAndroid ? wp(5) : wp(6),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
  },
  productContainer: {
    height: hp(32),
  },
  totalText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: isAndroid ? wp(5) : wp(6),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  summaryContainer: {
    width: theme.constants.screenWidth,
    padding: isAndroid ? wp(2) : wp(5),
    marginBottom: hp('1%'),
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: isAndroid ? hp(1.5) : hp(2.5),
  },
  summaryText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp(4),
    color: theme.colors.grey,
  },
  summaryPrice: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4),
    color: theme.colors.dark,
  },
  summaryPriceFinal: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4),
    color: theme.colors.primary,
  },
});

export default styles;
