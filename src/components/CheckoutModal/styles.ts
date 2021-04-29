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
    height: hp('70%'),
    width: wp('100%'),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: theme.constants.screenPadding / 2,
    paddingTop: theme.constants.screenPadding,
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
  headerTextContainer: {},
  totalText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.grey,
  },
  totalAmount: {},
});

export default styles;
