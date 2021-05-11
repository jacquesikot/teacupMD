import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '..';

export const BUTTON_WIDTH = wp(50);

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    width: wp(90),
    height: hp(60),
    borderRadius: wp(7),
    alignItems: 'center',
    padding: wp(10),
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(7),
    color: theme.colors.dark,
    marginTop: hp(2),
    textAlign: 'center',
  },
  subtext: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp(4.5),
    color: theme.colors.darkGrey,
    marginTop: hp(2),
    marginBottom: hp(3),
    width: wp(80),
    textAlign: 'center',
    lineHeight: hp(4),
  },
});

export default styles;
