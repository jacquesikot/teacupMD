import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '../../components';

const styles = StyleSheet.create({
  container: {
    paddingTop: hp('5%'),
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20,
    height: hp('13%'),
    backgroundColor: theme.colors.white,
    paddingLeft: theme.constants.screenPadding / 2,
    paddingRight: theme.constants.screenPadding / 2,
    borderBottomWidth: 1,
    borderColor: theme.colors.light,
  },
  iconContainer: {
    flexDirection: 'row',
    width: wp('18%'),
    justifyContent: 'space-between',
  },
  textContainer: {},
  name: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginBottom: 8,
  },
  welcome: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4%'),
    color: theme.colors.darkGrey,
  },
  alert1: {
    width: 20,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 28,
    left: 10,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  alert2: {
    width: 20,
    height: 15,
    borderRadius: 7.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.red,
    position: 'absolute',
    bottom: 35,
    left: 7.5,
  },
  number: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('3%'),
    color: theme.colors.dark,
  },
});

export default styles;
