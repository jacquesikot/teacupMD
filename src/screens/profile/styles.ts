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
  topContainer: {
    backgroundColor: theme.colors.white,
    width: '100%',
    height: hp('27%'),
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  notificationContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    height: hp('8%'),
  },
  profileImg: {
    width: wp('15%'),
    height: wp(15),
    borderRadius: wp(7.5),
    backgroundColor: theme.colors.dark,
    marginRight: 15,
  },
  profileTextContainer: {
    flexDirection: 'column',
    height: hp('6.8%'),
    justifyContent: 'space-between',
  },
  profileText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginBottom: wp(1),
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
  },
  accountBottom: {
    flexDirection: 'row',
    width: '60%',
    height: hp('7%'),
    marginTop: hp('4%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountBottomItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
  accountBottomText1: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5%'),
    color: theme.colors.dark,
    marginBottom: hp('1%'),
  },
  accountBottomText2: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
  },
  others: {
    width: theme.constants.screenWidth,
    height: hp('37%'),
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    marginTop: 25,
    padding: 20,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5%'),
    color: theme.colors.dark,
    marginBottom: 20,
  },
  othersContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  othersItem: {
    flexDirection: 'row',
    marginBottom: hp('5%'),
    alignItems: 'center',
    width: theme.constants.screenWidth - 30,
  },
  othersText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
    marginLeft: wp('5%'),
  },
  authBanner: {
    width: wp('70%'),
    height: hp('5%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lightGreen,
  },
  authText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.darkGrey,
    textAlign: 'center',
  },
});

export default styles;
