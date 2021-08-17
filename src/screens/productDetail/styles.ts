import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: theme.colors.white,
    width: '100%',
    alignItems: 'center',
    height: hp('55%'),
  },
  bottomContainer: {
    backgroundColor: theme.colors.light,
    borderTopLeftRadius: wp(8),
    borderTopRightRadius: wp(8),
    height: '100%',
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
    paddingRight: theme.constants.screenPadding / 2,
    position: 'relative',
    top: hp('-3%'),
  },
  dash: {
    width: wp('11%'),
    height: hp('0.25%'),
    borderRadius: 1,
    alignSelf: 'center',
    backgroundColor: theme.colors.grey,
    marginTop: hp('3%'),
    marginBottom: hp('4%'),
  },
  title: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('7%'),
    lineHeight: 35,
  },
  priceContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    height: hp('3%'),
    marginTop: hp('3%'),
    alignItems: 'center',
  },
  priceItems: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.orange,
    fontSize: wp('6%'),
    marginRight: wp('3%'),
  },
  salePrice: {
    fontFamily: 'SofiaPro-Medium',
    color: theme.colors.grey,
    fontSize: wp('3.7%'),
    textDecorationLine: 'line-through',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBox: {
    width: wp('7.3%'),
    height: wp('7.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: 5,
  },
  count: {
    fontFamily: 'SofiaPro-Medium',
    color: theme.colors.dark,
    fontSize: wp('6%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  extraContainer: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  deliveryTime: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.grey,
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
    marginRight: wp('5%'),
  },
  deliveryBanner: {
    flexDirection: 'row',
    backgroundColor: theme.colors.lightBlue,
    padding: 7,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryText: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.primary,
    fontSize: wp('4%'),
    marginLeft: wp('1.5%'),
  },
  detailsHeader: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('7%'),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  detailsText: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.grey,
    fontSize: wp('3.7%'),
    lineHeight: 25,
  },
  line: {
    width: theme.constants.screenWidth,
    height: hp('0.2%'),
    backgroundColor: theme.colors.light,
    borderRadius: 2,
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  nutritionText: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('7%'),
    marginBottom: hp('3%'),
  },
  nutritionContent: {
    fontFamily: 'SofiaPro-Regular',
    color: theme.colors.dark,
    fontSize: wp('3.7%'),
    lineHeight: 25,
  },
  relatedProduct: {
    fontFamily: 'SofiaPro-Bold',
    color: theme.colors.dark,
    fontSize: wp('7%'),
    marginBottom: hp('3%'),
    marginTop: hp('2%'),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  more: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
  },
  discount: {
    fontFamily: 'SofiaPro-Medium',
    color: theme.colors.red,
    fontSize: wp('3.7%'),
    marginLeft: wp('1%'),
  },
});

export default styles;
