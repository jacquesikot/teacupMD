import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';

export const IMG_SIZE = wp(60);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circleBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.constants.screenWidth - wp(27),
    height: theme.constants.screenWidth - wp(27),
    borderRadius: theme.constants.screenWidth - wp(27) / 2,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('7%'),
    color: theme.colors.dark,
    marginTop: hp('4%'),
    textAlign: 'center',
  },
  subtext: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4.5%'),
    color: theme.colors.darkGrey,
    marginTop: hp('3%'),
    marginBottom: hp('10%'),
    width: wp(80),
    textAlign: 'center',
    lineHeight: hp('4%'),
  },
});

export default styles;
