import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const IMG_FORM_FACTOR = 2.68;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.light,
  },
  departmentContainer: {
    marginBottom: hp('3%'),
    flexDirection: 'row',
    width: theme.constants.screenWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  department: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('5.5%'),
    color: theme.colors.dark,
  },
  moreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
  },
  departmentSlider: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
    marginBottom: hp('1%'),
  },
  productSlider: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
    marginBottom: hp('4%'),
  },
  image: {
    width: theme.constants.screenWidth,
    height: theme.constants.screenWidth / IMG_FORM_FACTOR,
    marginBottom: hp(4),
  },
  tipContainer: {
    marginBottom: hp('15%'),
    alignItems: 'center',
    width: theme.constants.screenWidth,
  },
  tipHeading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('3%'),
    color: theme.colors.grey,
    marginBottom: hp('2%'),
  },
  tipText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('5%'),
    color: theme.colors.grey,
    width: theme.constants.screenWidth - 50,
    textAlign: 'center',
    marginBottom: hp('2%'),
    lineHeight: 28,
  },
  tipLogo: {
    fontFamily: 'SofiaPro-Black',
    fontSize: wp('8%'),
    color: theme.colors.grey,
    width: theme.constants.screenWidth - 50,
    textAlign: 'center',
    marginBottom: hp('10%'),
  },
  tipTiny: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('3%'),
    color: theme.colors.grey,
    width: theme.constants.screenWidth - 50,
    textAlign: 'center',
    marginBottom: hp('7%'),
  },
  add: {
    width: theme.constants.screenWidth,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: theme.colors.lightBlue,
    borderStyle: 'dashed',
  },
  addText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('4%'),
    color: theme.colors.subText,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default styles;
