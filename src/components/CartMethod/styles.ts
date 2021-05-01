import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    height: hp('9%'),
    borderWidth: 1,
    borderRadius: 15,
    padding: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: theme.colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: wp('3%'),
  },
  textContainer: {
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
  },
  subtext: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.dark,
  },
  check: {
    width: wp('7%'),
    height: wp('7%'),
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('3.5%'),
  },
});

export default styles;
