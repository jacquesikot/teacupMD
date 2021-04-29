import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  cartHeading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
  },
  productContainer: {
    height: hp('35%'),
  },
  totalText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
    marginTop: hp('5%'),
    marginBottom: hp('1%'),
  },
  summaryContainer: {
    width: theme.constants.screenWidth,
    padding: wp('5%'),
    marginBottom: hp('1%'),
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  summaryText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
  },
  summaryPrice: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
  },
});

export default styles;
