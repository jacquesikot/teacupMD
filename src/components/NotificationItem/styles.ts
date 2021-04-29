import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    width: theme.constants.screenWidth,
    flexDirection: 'row',
  },
  icon: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
  },
  textContainer: {
    width: '70%',
    marginTop: hp('2%'),
  },
  title: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('4%'),
    color: theme.colors.dark,
    width: '70%',
    marginBottom: hp('1.5%'),
  },
  body: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.grey,
    width: '85%',
  },
  timeContainer: {
    height: '100%',
  },
  time: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.grey,
  },
});

export default styles;
