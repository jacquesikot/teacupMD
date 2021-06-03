import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    height: isAndroid ? hp(13.5) : hp(15),
    borderWidth: 1,
    borderColor: theme.colors.light,
    borderRadius: wp(4),
    marginTop: hp(2),
    padding: wp(5),
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: wp(6),
    justifyContent: 'space-around',
    height: '100%',
  },
  titleText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4),
    color: theme.colors.dark,
    width: wp(40),
  },
  priceText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4),
    color: theme.colors.dark,
  },
  trashContainer: {
    height: '40%',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '84%',
    top: '100%',
  },
  counterBox: {
    width: wp('5%'),
    height: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: 5,
  },
  count: {
    fontFamily: 'SofiaPro-Medium',
    color: theme.colors.dark,
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
});

export default styles;
