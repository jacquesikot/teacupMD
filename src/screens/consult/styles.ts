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
    marginTop: theme.constants.screenPadding,
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
    marginTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  clinicalText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6.5%'),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
    marginTop: 30,
    marginBottom: 30,
  },
  grid: {
    width: theme.constants.screenWidth,
  },
});

export default styles;
