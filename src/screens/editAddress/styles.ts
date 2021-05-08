import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const FORM_WIDTH = wp('30%');

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  formContainer: {
    width: theme.constants.screenWidth,
  },
  inputTitle: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('4.5%'),
    width: theme.constants.screenWidth,
    marginBottom: hp('2%'),
    marginTop: hp('4%'),
    color: theme.colors.dark,
  },
  row: {
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: hp('10%'),
    marginTop: hp('5%'),
  },
  addressStatus: {
    width: theme.constants.screenWidth,
    height: hp('8%'),
    borderRadius: 15,
    backgroundColor: theme.colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressStatus2: {
    width: theme.constants.screenWidth,
    height: hp('13%'),
    borderRadius: 15,
    padding: 15,
    backgroundColor: theme.colors.lightGreen,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  addressStatusText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
    lineHeight: 25,
  },
});

export default styles;
