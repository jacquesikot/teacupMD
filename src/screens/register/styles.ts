import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

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
    marginTop: hp('2.5%'),
  },
  backText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5%'),
    marginLeft: wp('2%'),
    color: theme.colors.dark,
  },
  headingContainer: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    marginVertical: hp('4%'),
  },
  heading: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('10%'),
    color: theme.colors.dark,
  },
  formContainer: {
    height: hp('40%'),
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  termsOfUseContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  termsOfUseText1: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.subText,
  },
  termsOfUseText2: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('4%'),
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});

export default styles;
