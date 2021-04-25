import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { theme } from '..';

const styles = StyleSheet.create({
  container: {
    width: wp('43%'),
    height: hp('12%'),
    borderRadius: 15,
    padding: 15,
  },
  upperText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('4%'),
    color: theme.colors.dark,
    width: '70%',
    lineHeight: 23,
    marginBottom: 10,
  },
  lowerText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: wp('3%'),
    color: theme.colors.darkGrey,
  },
  image: {
    position: 'absolute',
    left: '75%',
    top: '23%',
  },
});

export default styles;
