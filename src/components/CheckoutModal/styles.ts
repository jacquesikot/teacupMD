import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: theme.colors.white,
    height: hp('78%'),
    width: wp('100%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding - 10,
    paddingBottom: 20,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: hp('6%'),
    height: hp('6%'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.light,
    marginRight: wp('3%'),
  },
  cartText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
  },
  headerTextContainer: {
    justifyContent: 'space-around',
    height: hp('7.5%'),
  },
  totalText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
    alignSelf: 'flex-end',
  },
  totalAmount: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('8%'),
    color: theme.colors.dark,
  },
  deliveryAddress: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5.5%'),
    color: theme.colors.dark,
    marginTop: hp('4%'),
  },
  deliveryContainer: {
    width: theme.constants.screenWidth,
    borderWidth: 1,
    height: hp('12%'),
    marginTop: hp('2.5%'),
    borderRadius: 15,
    borderColor: theme.colors.grey,
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  deliveryTextContainer: {},
  deliveryText1: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
  },
  deliveryText2: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.darkGrey,
    marginTop: hp('0.9%'),
  },
  icon: {
    width: wp('7%'),
    height: wp('7%'),
    borderRadius: wp('3.5%'),
    borderWidth: 1,
    borderColor: theme.colors.grey,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  method: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6.5%'),
    color: theme.colors.dark,
    marginTop: hp('3%'),
    marginBottom: hp('1.5%'),
  },
  cartMethodContainer: {
    height: hp('26%'),
  },
  line: {
    width: wp('100%'),
    height: 2,
    backgroundColor: theme.colors.light,
    marginBottom: hp('1.5%'),
    alignSelf: 'center',
  },
  dropdown: {
    width: theme.constants.screenWidth,
    height: hp('20%'),
    backgroundColor: theme.colors.light,
    position: 'absolute',
    top: hp('10%'),
    marginTop: hp('2%'),
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.grey,
    padding: wp('3%'),
  },
});

export default styles;
