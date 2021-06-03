import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

export const WIDTH = isAndroid ? wp(26.5) : wp(27.5);
export const HEIGHT = hp(15);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  headingContainer: {
    marginTop: isAndroid ? hp(3) : theme.constants.screenPadding - 10,
    width: theme.constants.screenWidth,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: isAndroid ? wp(7) : wp(8),
    color: theme.colors.dark,
  },
  subHeading: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp(4),
    color: theme.colors.darkGrey,
    marginTop: hp(0.8),
  },
  tabContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    justifyContent: 'space-between',
    marginTop: isAndroid ? hp(2.5) : hp(3),
  },
  clinicalText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: isAndroid ? wp(5.5) : wp(6.5),
    color: theme.colors.dark,
    width: theme.constants.screenWidth,
    marginTop: isAndroid ? hp(2) : hp(4),
    marginBottom: isAndroid ? hp(3) : hp(4),
  },
  grid: {
    width: theme.constants.screenWidth,
  },
});

export default styles;
