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
    backgroundColor: theme.colors.white,
  },
  welcomeContainer: {
    width: theme.constants.screenWidth,
    height: hp(10),
    marginTop: isAndroid ? hp(5) : hp(10),
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('10%'),
    color: theme.colors.dark,
  },
  subText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('6%'),
    color: theme.colors.subText,
  },
  formContainer: {
    marginTop: hp('5%'),
    height: hp('22%'),
    justifyContent: 'space-around',
  },
  forgotPasswordContainer: {
    width: theme.constants.screenWidth,
    flexDirection: 'row-reverse',
  },
  forgotPassword: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
    marginTop: hp('3%'),
  },
  registerContainer: {
    flexDirection: 'row',
    paddingBottom: hp('3%'),
    paddingTop: hp('3%'),
    justifyContent: 'center',
  },
  registerTest1: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
  },
  registerTest2: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.primary,
  },
  buttonContainer: {
    marginTop: hp('22%'),
  },
});

export default styles;
