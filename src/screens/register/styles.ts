import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';
import isAndroid from '../../utils/isAndroid';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: theme.constants.screenWidth,
    marginTop: hp(2.5),
  },
  backText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(5),
    marginLeft: wp(2),
    color: theme.colors.dark,
  },
  headingContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    marginVertical: isAndroid ? hp(3) : hp(4.8),
  },
  heading: {
    fontFamily: 'SofiaPro-Black',
    fontSize: isAndroid ? wp(8) : wp(10),
    color: theme.colors.dark,
  },
  formContainer: {
    height: hp(40),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: hp(5),
  },
  termsOfUseContainer: {
    alignItems: 'center',
    marginBottom: hp(3),
  },
  termsOfUseText1: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp(4),
    color: theme.colors.subText,
  },
  termsOfUseText2: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp(4),
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    marginTop: hp(1),
  },
});

export default styles;
