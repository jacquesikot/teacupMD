import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    borderRadius: 15,
    height: hp('17%'),
    borderWidth: 1,
    borderColor: theme.colors.light,
    padding: wp('5%'),
    flexDirection: 'row',
  },
  addressContainer: {
    width: '90%',
  },
  name: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('5%'),
    color: theme.colors.dark,
  },
  address: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
    marginTop: hp('1.5%'),
    width: '80%',
  },
  phone: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.dark,
    marginTop: hp('1.5%'),
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
