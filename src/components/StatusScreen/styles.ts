import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circleBg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.lightBlue,
    width: theme.constants.screenWidth - 70,
    height: theme.constants.screenWidth - 70,
    borderRadius: theme.constants.screenWidth - 40 / 2,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('8%'),
    color: theme.colors.dark,
    marginTop: hp('4%'),
  },
  subtext: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('5%'),
    color: theme.colors.darkGrey,
    marginTop: hp('3%'),
    marginBottom: hp('10%'),
  },
});

export default styles;
