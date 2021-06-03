import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';
import isAndroid from '../../utils/isAndroid';

export const MARGIN_RIGHT = wp('5%');
export const WIDTH = wp(35);
export const HEIGHT = isAndroid ? wp(47) : wp(45);

const styles = StyleSheet.create({
  container: {
    borderRadius: wp(4),
    alignItems: 'center',
    padding: wp('3.7%'),
    marginBottom: hp('2.5%'),
  },
  label: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.dark,
    fontSize: wp('3.8%'),
    marginTop: hp('1.5%'),
    width: '100%',
    height: hp('4%'),
  },
  main_content: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.grey,
    fontSize: wp('3.1%'),
    width: '100%',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('4%'),
  },
  discountText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.white,
    fontSize: wp('3%'),
  },
  cart: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('4%'),
    backgroundColor: theme.colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sale: {
    borderRadius: wp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('1%'),
    marginTop: hp('0.5%'),
    alignSelf: 'flex-start',
  },
  saleText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: hp('2%'),
    color: theme.colors.light,
  },
});

export default styles;
