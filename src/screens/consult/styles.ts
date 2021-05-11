import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

export const WIDTH = wp('27.5%');
export const HEIGHT = hp('15%');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  headingContainer: {
    marginTop: theme.constants.screenPadding - 10,
    width: theme.constants.screenWidth,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('8%'),
    color: theme.colors.dark,
  },
  subHeading: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
    marginTop: hp(0.8),
  },
  tabContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  clinicalText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6.5%'),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
    marginTop: hp(4),
    marginBottom: hp(4),
  },
  grid: {
    width: theme.constants.screenWidth,
  },
});

export default styles;
