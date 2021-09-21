import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';
import isAndroid from '../../utils/isAndroid';

export const MARGIN_RIGHT = wp('5%');
export const WIDTH = wp(35);
export const HEIGHT = hp(40);

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
    height: hp('2%'),
  },
  prescription: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.red,
    fontSize: wp('3%'),
    marginVertical: hp(0.5),
    width: '100%',
  },
  qty: {
    position: 'absolute',
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.green,
  },
  qtyText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.white,
    fontSize: wp('4%'),
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
    // marginTop: hp('1%'),
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
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('3.5%'),
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
