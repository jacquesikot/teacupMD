import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { theme } from '..';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: isAndroid ? hp(3) : theme.constants.screenPadding,
    marginBottom: 30,
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5.5%'),
    color: theme.colors.dark,
  },
  alert: {
    width: wp(5),
    height: wp(4),
    padding: wp(0.5),
    borderRadius: wp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    borderWidth: 1,
    borderColor: theme.colors.white,
    bottom: 10,
    left: 10,
  },
  cartText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.white,
  },
});

export default styles;
