import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: hp(3),
    height: hp('12%'),
    paddingTop: hp(3),
    backgroundColor: theme.colors.white,
    paddingLeft: theme.constants.screenPadding / 2,
    paddingRight: theme.constants.screenPadding / 2,
    borderBottomWidth: 1,
    borderColor: theme.colors.light,
  },
  iconContainer: {
    flexDirection: 'row',
    width: wp('15%'),
    justifyContent: 'space-between',
  },
  textContainer: {},
  name: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginBottom: hp(1),
  },
  welcome: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
  },
  alert1: {
    width: wp(5),
    height: wp(4),
    padding: isAndroid ? 0 : wp(0.3),
    borderRadius: wp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 10,
    left: 10,
    borderWidth: 1.5,
    borderColor: theme.colors.white,
  },
  alert2: {
    width: wp(5),
    height: wp(4),
    padding: wp(0.5),
    borderRadius: wp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 35,
    left: 7.5,
    borderWidth: 1.5,
    borderColor: theme.colors.white,
  },
  number: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: isAndroid ? wp(2.5) : wp(3),
    color: theme.colors.white,
  },
});

export default styles;
